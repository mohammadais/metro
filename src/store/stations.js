// Adjacency list for stations
const connectedStations = [

    // Yellow Lines

    ["Samaypur Badli", "Azadpur"], ["Azadpur", "Civil Lines"], ["Civil Lines", "Kashmere Gate"], ["Kashmere Gate", "Chandni Chowk"], 
    ["Chandni Chowk", "New Delhi"], ["New Delhi", "Rajiv Chowk"], ["Rajiv Chowk", "Central Secretariat"], ["Central Secretariat", "INA"],
    ["INA", "Hauz Khas"], ["Hauz Khas", "Huda City Centre"], 


    // Blue Line

    ["Dwarka Sec 21", "Dwarka Sec 8"],
    ["Dwarka Sec 8", "Dwarka Sec 9"], 
    ["Dwarka Sec 9", "Dwarka Sec 10"],
    ["Dwarka Sec 10", "Dwarka Sec 11"], 
    ["Dwarka Sec 11", "Dwarka Sec 12"], 
    ["Dwarka Sec 12", "Dwarka Sec 13"],
    ["Dwarka Sec 13", "Dwarka Sec 14"], 
    ["Dwarka Sec 14", "Dwarka"], 
    ["Dwarka", "Dwarka Mor"], 
    ["Dwarka Mor", "Nawada"], 
    ["Nawada", "Uttam Nagar (W)"], 
    ["Uttam Nagar (W)", "Uttam Nagar (E)"], 
    ["Uttam Nagar (E)", "Janakpuri West"],
    ["Janakpuri West", "Janakpuri East"],
    ["Janakpuri East", "Tilak Nagar"],
    ["Tilak Nagar", "Subhash Nagar"],
    ["Subhash Nagar", "Tagore Garden"],
    ["Tagore Garden", "Rajouri Garden"],
    ["Rajouri Garden", "Ramesh Nagar"],
    ["Ramesh Nagar", "Moti Nagar"],
    ["Moti Nagar", "Kirti Nagar"],
    ["Kirti Nagar", "Shadipur"],
    ["Shadipur", "Patel Nagar"],
    ["Patel Nagar", "Rajendra Place"],
    ["Rajendra Place", "Karol Bagh"],
    ["Karol Bagh", "Jhandewalan"],
    ["Jhandewalan", "RK Ashram Marg"],
    ["RK Ashram Marg", "Rajiv Chowk"],
    ["Rajiv Chowk", "Barakhamba Road"],
    ["Barakhamba Road", "Mandi House"],
    ["Mandi House", "Supreme Court"],
    ["Supreme Court", "Indraprastha"],
    ["Indraprastha", "Yamuna Bank"], 
    ["Yamuna Bank", "Akshardham"],
    ["Akshardham", "Mayur Vihar-1"], 
    ["Mayur Vihar-1", "Mayur Vihar Ext"],
    ["Mayur Vihar Ext", "New Ashok Nagar"],
    ["New Ashok Nagar", "Noida Sec 15"],
    ["Noida Sec 15", "Noida Sec 16"],
    ["Noida Sec 16", "Noida Sec 18"],
    ["Noida Sec 18", "Botanical Garden"],
    ["Botanical Garden", "Golf Course"],
    ["Golf Course", "Noida City Centre"],
    ["Sec 34 Noida", "Sec 52 Noida"],
    ["Sec 52 Noida", "Sec 61 Noida"],
    ["Sec 61 Noida", "Sec 59 Noida"],
    ["Sec 59 Noida", "Sec 62 Noida"],
    ["Sec 62 Noida", "Noida Electronic City"],
    

    // Blue Line - Vaishali Route

    ["Yamuna Bank", "Laxmi Nagar"],
    ["Karkaduma", "Anand Vihar I.S.B.T."], 
    ["Anand Vihar I.S.B.T.", "Vaishali"],

    // Violet Line

    ["Kashmere Gate", "Mandi House"], ["Mandi House", "Central Secretariat"], ["Central Secretariat", "Lajpat Nagar"],
    ["Lajpat Nagar", "Kalkaji Mandir"], ["Kalkaji Mandir", "Ballabgarh"],

    // Magenta Line

    ["Botanical Garden", "Kalkaji Mandir"], ["Kalkaji Mandir", "Hauz Khas"],
    ["Hauz Khas", "Terminal 1-IGI Airport"], ["Terminal 1-IGI Airport", "Janakpuri West"],


    // Airport Express Line

    ["New Delhi", "Shivaji Stadium"], ["Shivaji Stadium", "Dhaula Kuan"], ["Dhaula Kuan", "Delhi Aerocity"],
    ["Delhi Aerocity", "Airport"], ["Airport", "Dwarka Sec 21"], 

    
    // Pink Line

    ["Majlis Park", "Azadpur"], ["Azadpur", "Netaji Subhash Place"], ["Netaji Subhash Place", "Rajouri Garden"],
    ["Rajouri Garden", "INA"], ["INA", "Lajpat Nagar"], ["Lajpat Nagar", "Hazrat Nizamuddin"], ["Hazrat Nizamuddin", "Mayur Vihar-1"],
    ["Mayur Vihar-1", "Anand Vihar I.S.B.T."], ["Anand Vihar I.S.B.T.", "Karkaduma"], ["Karkaduma", "Welcome"],
    ["Welcome", "Shiv Vihar"], 
    
    // Red Line

    ["Rithala", "Netaji Subhash Place"], ["Netaji Subhash Place", "Inderlok"], ["Inderlok", "Kashmere Gate"],
    ["Kashmere Gate", "Welcome"], ["Welcome", "New Bus Adda"],

    // Green Line

    ["City Park", "Ashok Park Main"], ["Ashok Park Main", "Inderlok"], ["Ashok Park Main", "Kirti Nagar"]
];

const stations = new Map();
connectedStations.forEach(station => {

  let present = stations.get(station[0]);
  if (present){
    stations.set(station[0], [...present, station[1]]);
  } else {
    stations.set(station[0], [station[1]]);
  }

  present = stations.get(station[1]);
  if (present){
    stations.set(station[1], [...present, station[0]]);
  } else {
    stations.set(station[1], [station[0]]);
  }
});

export const getNextStations = (station) => stations.get(station);