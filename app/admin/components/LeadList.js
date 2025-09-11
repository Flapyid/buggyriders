"use client";
import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { collection, onSnapshot, doc, deleteDoc } from "firebase/firestore";

export default function LeadList() {
  const [leads, setLeads] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [sortBy, setSortBy] = useState("newest");

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "leads"), (snapshot) => {
      setLeads(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  const deleteLead = async (id) => {
    if (window.confirm("Are you sure you want to delete this lead?")) {
      try {
        await deleteDoc(doc(db, "leads", id));
      } catch (err) {
        console.error("Error deleting lead:", err);
      }
    }
  };

  // Sort leads based on selected option
  const sortedLeads = [...leads].sort((a, b) => {
    const dateA = a.createdAt?.toDate() || new Date(0);
    const dateB = b.createdAt?.toDate() || new Date(0);
    
    if (sortBy === "newest") {
      return dateB - dateA;
    } else {
      return dateA - dateB;
    }
  });

  // Get recent leads for summary view (latest 5)
  const recentLeads = sortedLeads.slice(0, 3);
  const totalLeads = leads.length;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Leads Overview</h2>
          <p className="text-sm text-gray-500">Total: {totalLeads} leads</p>
        </div>
        <div className="flex items-center space-x-3">
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
          <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Export
          </button>
        </div>
      </div>

      {totalLeads === 0 ? (
        <div className="text-center py-10 bg-white rounded-lg border border-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="mt-4 text-lg font-medium text-gray-900">No leads yet</h3>
          <p className="mt-1 text-gray-500">Get started by adding your first leads.</p>
        </div>
      ) : (
        <>
          {/* Summary View (Always Visible) */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden mb-6">
            <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
              <h3 className="text-lg font-medium text-gray-800">Recent Leads</h3>
              <p className="text-sm text-gray-500">Latest 3 leads added to the system</p>
            </div>
            <div className="divide-y divide-gray-200">
              {recentLeads.map((lead) => (
                <div key={lead.id} className="px-6 py-4 flex justify-between items-center">
                  <div>
                    <div className="text-sm font-medium text-gray-900">#{lead.id.substring(0, 8)}</div>
                    <div className="text-sm text-gray-500">
                      {lead.createdAt?.toDate().toLocaleDateString()} at {lead.createdAt?.toDate().toLocaleTimeString()}
                    </div>
                  </div>
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    New
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Full Table View (Collapsible) */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <div 
              className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center cursor-pointer"
              onClick={() => setShowAll(!showAll)}
            >
              <h3 className="text-lg font-medium text-gray-800">All Leads</h3>
              <div className="flex items-center">
                <span className="text-sm text-gray-500 mr-3">
                  {showAll ? "Click to collapse" : "Click to view all"}
                </span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-5 w-5 text-gray-500 transition-transform ${showAll ? "rotate-180" : ""}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {showAll && (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        ID
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date Created
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {sortedLeads.map((lead) => (
                      <tr key={lead.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">#{lead.id.substring(0, 8)}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{lead.createdAt?.toDate().toLocaleDateString()}</div>
                          <div className="text-sm text-gray-500">{lead.createdAt?.toDate().toLocaleTimeString()}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                            New
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button 
                            onClick={() => deleteLead(lead.id)}
                            className="text-red-600 hover:text-red-900 px-2 py-1 rounded hover:bg-red-50 transition-colors"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}