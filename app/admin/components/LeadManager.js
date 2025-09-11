"use client";
import { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import { addLeadIfAllowed } from "../../utils/leadService";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

export default function LeadManager({ pageName = "Dashboard" }) {
  const [leads, setLeads] = useState([]);
  const [activeTab, setActiveTab] = useState("all");
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   addLeadIfAllowed(pageName);
  // }, [pageName]);

  useEffect(() => {
    const q = query(collection(db, "leads"), orderBy("createdAt", "desc"));
    setLoading(true);
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const leadsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setLeads(leadsData);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Filter leads based on active tab
  const filteredLeads = activeTab === "all" 
    ? leads 
    : leads.filter(lead => lead.page === activeTab);

  // Get unique pages for tabs
  const pages = [...new Set(leads.map(lead => lead.page))];

  // Calculate lead counts
  const totalLeads = leads.length;
  const todayLeads = leads.filter(lead => {
    const today = new Date();
    const leadDate = lead.createdAt?.toDate();
    return leadDate && leadDate.toDateString() === today.toDateString();
  }).length;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
      {/* Header with stats */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Lead Management</h2>
          <div className="flex items-center space-x-2">
            <span className="text-blue-100 text-sm">Auto-tracking: Enabled</span>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center">
              <div className="bg-blue-500/20 p-2 rounded-lg mr-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-极.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <div>
                <p className="text-sm text-blue-100">Total Leads</p>
                <p className="text-2xl font-bold">{totalLeads}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center">
              <div className="bg-green-500/20 p-2 rounded-lg mr-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <p className="text-sm text-blue-100">Today's Leads</p>
                <p className="text-2xl font-bold">{todayLeads}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center">
              <div className="bg-purple-500/20 p-2 rounded-lg mr-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 极 01-2-2z"></path>
                </svg>
              </div>
              <div>
                <p className="text-sm text-blue-100">Unique Pages</p>
                <p className="text-2xl font-bold">{pages.length}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 bg-gray-50">
        <nav className="flex overflow-x-auto">
          <button
            onClick={() => setActiveTab("all")}
            className={`py-4 px-6 text-center font-medium whitespace-nowrap ${activeTab === "all" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-gray-700"}`}
          >
            All Leads ({totalLeads})
          </button>
          
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => setActiveTab(page)}
              className={`py-4 px-6 text-center font-medium whitespace-nowrap ${activeTab === page ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-gray-700"}`}
            >
              {page} ({leads.filter(lead => lead.page === page).length})
            </button>
          ))}
        </nav>
      </div>

      {/* Leads List */}
      <div className="p-6">
        {loading ? (
          <div className="flex justify-center items-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : filteredLeads.length === 0 ? (
          <div className="text-center py-8">
            <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <p className="text-gray-500">No leads found for this selection</p>
          </div>
        ) : (
          <div className="overflow-hidden rounded-lg border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Page 
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User Agent
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date & Time
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                          </svg>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{lead.page}</div>
                          {/* <div className="text-sm text-gray-500">{lead.ip || "Unknown IP"}</div> */}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 max-w-xs truncate">{lead.userAgent || "Unknown"}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {lead.createdAt?.toDate().toLocaleDateString() || "—"}
                      </div>
                      <div className="text-sm text-gray-500">
                        {lead.createdAt?.toDate().toLocaleTimeString() || "—"}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Footer with summary */}
      <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">
            Showing <span className="font-medium">{filteredLeads.length}</span> of <span className="font-medium">{totalLeads}</span> leads
          </p>
          <div className="flex items-center space-x-2">
            <button className="text-sm text-blue-600 hover:text-blue-800 px-3 py-1 rounded-md bg-blue-50">
              Export CSV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}