// src/utils/generateLeads.js
export function generateRandomLeads(count = 5) {
  const names = ["John Doe", "Alice Smith", "Michael Johnson", "Emily Davis", "Robert Brown"];
  const emails = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com"];
  const services = ["Buggy Tour", "Desert Safari", "Quad Bike", "City Tour"];

  return Array.from({ length: count }, (_, i) => {
    const name = names[Math.floor(Math.random() * names.length)];
    const email = `${name.split(" ")[0].toLowerCase()}${Math.floor(Math.random() * 100)}@${emails[Math.floor(Math.random() * emails.length)]}`;
    const service = services[Math.floor(Math.random() * services.length)];
    return {
      id: i + 1,
      name,
      email,
      service,
      date: new Date().toLocaleDateString(),
    };
  });
}
