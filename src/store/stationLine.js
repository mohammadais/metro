const stationLines = [	
    ["Rithala", "RED"],
	["Welcome", "RED"],
	["New Bus Adda", "RED"],


	["Inderlok", "GREEN"],
	["City Park", "GREEN"],
	["Kirti Nagar", "GREEN"],
	["Kirti Nagar", "BLUE"],
	["Ashok Park Main", "GREEN"],

	
	["New Delhi", "ORANGE"],
	["New Delhi", "YELLOW"],
	["Shivaji Stadium", "ORANGE"],
	["Dhaula Kuan", "ORANGE"],
	["Delhi Aerocity", "ORANGE"],
	["Airport", "ORANGE"],
	["Dwarka Sec 21", "BLUE"],
	["Dwarka Sec 21", "ORANGE"],

	
	["Dwarka Sec 8", "BLUE"],
	["Dwarka Sec 9", "BLUE"],
	["Dwarka Sec 10", "BLUE"],
	["Dwarka Sec 11", "BLUE"],
	["Dwarka Sec 12", "BLUE"],
	["Dwarka Sec 13", "BLUE"],
	["Dwarka Sec 14", "BLUE"],
	["Dwarka", "BLUE"],
	["Dwarka Mor", "BLUE"],
	["Nawada", "BLUE"],
	["Uttam Nagar (W)", "BLUE"],
	["Uttam Nagar (E)", "BLUE"],
	["Janakpuri East", "BLUE"],
	["Tilak Nagar", "BLUE"],
	["Subhash Nagar", "BLUE"],
	["Tagore Garden", "BLUE"],
	["Ramesh Nagar", "BLUE"],
	["Moti Nagar", "BLUE"],
	["Shadipur", "BLUE"],
	["Patel Nagar", "BLUE"],
	["Rajendra Place", "BLUE"],
	["Karol Bagh", "BLUE"],
	["Jhandewalan", "BLUE"],
	["RK Ashram Marg", "BLUE"],
	["Barakhamba Road", "BLUE"],
	["Mandi House", "BLUE"],
	["Supreme Court", "BLUE"],
	["Indraprastha", "BLUE"],
	["Yamuna Bank", "BLUE"],
	["Akshardham", "BLUE"],
	["Mayur Vihar-1", "BLUE"],
	["Mayur Vihar Ext", "BLUE"],
	["New Ashok Nagar", "BLUE"],
	["Noida Sec 15", "BLUE"],
	["Noida Sec 16", "BLUE"],
	["Noida Sec 18", "BLUE"],
	["Golf Course", "BLUE"],
	["Noida City Centre", "BLUE"],
	["Sec Noida 34", "BLUE"],
	["Sec Noida 52", "BLUE"],
	["Sec Noida 61", "BLUE"],
	["Sec Noida 59", "BLUE"],
	["Sec Noida 62", "BLUE"],
	["Noida Electronic City", "BLUE"],

	["Laxmi Nagar Nagar", "BLUE"],
	["Nirman Vihar", "BLUE"],
	["Preet Vihar", "BLUE"],
	["Kaushambi", "BLUE"],
	["Vaishali", "BLUE"],

	
	["Majlis Park", "PINK"],
	["Azadpur", "PINK"],
	["Netaji Subhash Place", "PINK"],
	["Rajouri Garden", "PINK"],
	["Rajouri Garden", "BLUE"],
	["Lajpat Nagar", "PINK"],
	["Hazrat Nizamuddin", "PINK"],
	["Anand Vihar I.S.B.T.", "PINK"],
	["Karkaduma", "PINK"],
	["Shiv Vihar", "PINK"],
	

	["Kashmere Gate", "VIOLET"],
	["Central Secretariat", "VIOLET"],
	["Central Secretariat", "YELLOW"],
	["Kalkaji Mandir", "VIOLET"],
	["Ballabgarh", "VIOLET"],

	
	["Samaypur Badli", "YELLOW"],
	["Civil Lines", "YELLOW"],
	["Chandni Chowk", "YELLOW"],
	["Rajiv Chowk", "YELLOW"],
	["Rajiv Chowk", "BLUE"],
	["INA", "YELLOW"],
	["Hauz Khas", "YELLOW"],
	["Huda City Centre", "YELLOW"],
	

	["Janakpuri West", "MAGENTA"],
	["Janakpuri West", "BLUE"],
	["Shankar Vihar", "MAGENTA"],
	["Botanical Garden", "MAGENTA"]
];

const stationLine = new Map();
stationLines.forEach(station => {

	const present = stationLine.get(station[0]);
	if (present){
	  stationLine.set(station[0], [...present, station[1]]);
	} else {
	  stationLine.set(station[0], [station[1]]);
	}
});

export const getStationLines = (station) => stationLine.get(station);



