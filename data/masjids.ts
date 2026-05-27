export interface Masjid {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  stateCode: string;
  zip: string;
  lat: number;
  lng: number;
  phone?: string;
  website?: string;
  established?: number;
}

export const MASJIDS: Masjid[] = [
  // Alabama
  { id: "al-1", name: "Islamic Society of Greater Birmingham", address: "3521 7th Ave S", city: "Birmingham", state: "Alabama", stateCode: "AL", zip: "35222", lat: 33.5038, lng: -86.7921, phone: "(205) 322-0819", website: "https://www.isgb.org" },
  { id: "al-2", name: "Islamic Center of Huntsville", address: "1645 Kevin Dr", city: "Huntsville", state: "Alabama", stateCode: "AL", zip: "35816", lat: 34.7300, lng: -86.5861 },
  { id: "al-3", name: "Masjid Al-Mu'min", address: "1115 Short 18th St", city: "Birmingham", state: "Alabama", stateCode: "AL", zip: "35203", lat: 33.5168, lng: -86.8048 },

  // Alaska
  { id: "ak-1", name: "Masjid Al-Nur of Anchorage", address: "1202 E 64th Ave", city: "Anchorage", state: "Alaska", stateCode: "AK", zip: "99518", lat: 61.1508, lng: -149.8642 },
  { id: "ak-2", name: "Islamic Community Center of Alaska", address: "4800 E Northern Lights Blvd", city: "Anchorage", state: "Alaska", stateCode: "AK", zip: "99508", lat: 61.2120, lng: -149.7780 },

  // Arizona
  { id: "az-1", name: "Islamic Community Center of Tempe", address: "126 E University Dr", city: "Tempe", state: "Arizona", stateCode: "AZ", zip: "85281", lat: 33.4255, lng: -111.9400, phone: "(480) 968-7710" },
  { id: "az-2", name: "Islamic Center of Tucson", address: "901 E 1st St", city: "Tucson", state: "Arizona", stateCode: "AZ", zip: "85719", lat: 32.2282, lng: -110.9507 },
  { id: "az-3", name: "Islamic Center of the Northeast Valley", address: "777 W Southern Ave", city: "Mesa", state: "Arizona", stateCode: "AZ", zip: "85210", lat: 33.3946, lng: -111.8386 },
  { id: "az-4", name: "Al-Hedaya Mosque", address: "2102 N 35th Ave", city: "Phoenix", state: "Arizona", stateCode: "AZ", zip: "85009", lat: 33.4900, lng: -112.1350 },

  // Arkansas
  { id: "ar-1", name: "Islamic Center of Little Rock", address: "9808 Treasure Hill Rd", city: "Little Rock", state: "Arkansas", stateCode: "AR", zip: "72209", lat: 34.6685, lng: -92.3738 },
  { id: "ar-2", name: "Masjid Al-Islam", address: "606 E 24th St", city: "Little Rock", state: "Arkansas", stateCode: "AR", zip: "72206", lat: 34.7292, lng: -92.2560 },

  // California
  { id: "ca-1", name: "King Fahad Mosque", address: "10980 Washington Blvd", city: "Culver City", state: "California", stateCode: "CA", zip: "90232", lat: 34.0057, lng: -118.3973, phone: "(310) 815-0170" },
  { id: "ca-2", name: "Islamic Cultural Center of Northern California", address: "1433 Madison Ave", city: "Oakland", state: "California", stateCode: "CA", zip: "94612", lat: 37.8127, lng: -122.2635 },
  { id: "ca-3", name: "Masjid Al-Noor (Santa Clara)", address: "3003 Scott Blvd", city: "Santa Clara", state: "California", stateCode: "CA", zip: "95054", lat: 37.3725, lng: -121.9642 },
  { id: "ca-4", name: "Islamic Society of San Francisco", address: "20 Jones St", city: "San Francisco", state: "California", stateCode: "CA", zip: "94102", lat: 37.7812, lng: -122.4125 },
  { id: "ca-5", name: "Islamic Center of San Diego", address: "7050 Eckstrom Ave", city: "San Diego", state: "California", stateCode: "CA", zip: "92111", lat: 32.7828, lng: -117.1596 },
  { id: "ca-6", name: "ISOC - Islamic Society of Orange County", address: "9752 13th Ave", city: "Garden Grove", state: "California", stateCode: "CA", zip: "92844", lat: 33.7744, lng: -117.9681 },
  { id: "ca-7", name: "Masjid Omar Al-Farooq", address: "1110 N Hudson Ave", city: "Los Angeles", state: "California", stateCode: "CA", zip: "90038", lat: 34.0832, lng: -118.3288 },
  { id: "ca-8", name: "MCA - Muslim Community Association", address: "3003 Scott Blvd", city: "Santa Clara", state: "California", stateCode: "CA", zip: "95054", lat: 37.3722, lng: -121.9640, website: "https://www.mca.com" },
  { id: "ca-9", name: "Islamic Center of Riverside", address: "5753 Mission Blvd", city: "Riverside", state: "California", stateCode: "CA", zip: "92509", lat: 33.9782, lng: -117.4159 },
  { id: "ca-10", name: "Masjid Al-Islam", address: "4400 Market St", city: "Oakland", state: "California", stateCode: "CA", zip: "94608", lat: 37.8281, lng: -122.2750 },

  // Colorado
  { id: "co-1", name: "Islamic Society of Colorado Springs", address: "1515 Templeton Gap Rd", city: "Colorado Springs", state: "Colorado", stateCode: "CO", zip: "80907", lat: 38.8716, lng: -104.8075 },
  { id: "co-2", name: "Denver Islamic Society", address: "2071 S Parker Rd", city: "Denver", state: "Colorado", stateCode: "CO", zip: "80231", lat: 39.6854, lng: -104.8787 },
  { id: "co-3", name: "Colorado Muslim Society", address: "2071 S Parker Rd", city: "Aurora", state: "Colorado", stateCode: "CO", zip: "80014", lat: 39.6848, lng: -104.8793 },

  // Connecticut
  { id: "ct-1", name: "Islamic Association of Greater Hartford", address: "55 Stuart St", city: "Hartford", state: "Connecticut", stateCode: "CT", zip: "06120", lat: 41.7637, lng: -72.7008 },
  { id: "ct-2", name: "Masjid Al-Islam of New Haven", address: "468 Grand Ave", city: "New Haven", state: "Connecticut", stateCode: "CT", zip: "06513", lat: 41.3017, lng: -72.8950 },

  // Delaware
  { id: "de-1", name: "Islamic Society of Delaware", address: "28 Salem Church Rd", city: "Newark", state: "Delaware", stateCode: "DE", zip: "19713", lat: 39.6595, lng: -75.7495 },
  { id: "de-2", name: "Masjid Ibrahim", address: "519 N Lombard Ave", city: "Wilmington", state: "Delaware", stateCode: "DE", zip: "19805", lat: 39.7447, lng: -75.5770 },

  // Florida
  { id: "fl-1", name: "Islamic Society of Central Florida", address: "1021 N Goldenrod Rd", city: "Orlando", state: "Florida", stateCode: "FL", zip: "32807", lat: 28.5483, lng: -81.2985, phone: "(407) 273-7750" },
  { id: "fl-2", name: "Masjid Al-Ansar", address: "5245 NW 7th Ave", city: "Miami", state: "Florida", stateCode: "FL", zip: "33127", lat: 25.8211, lng: -80.2115 },
  { id: "fl-3", name: "Islamic Center of Boca Raton", address: "446 NW 20th St", city: "Boca Raton", state: "Florida", stateCode: "FL", zip: "33431", lat: 26.3780, lng: -80.1198 },
  { id: "fl-4", name: "Islamic Center of Greater Miami", address: "6099 NW 22nd Ave", city: "Miami", state: "Florida", stateCode: "FL", zip: "33142", lat: 25.8272, lng: -80.2428 },
  { id: "fl-5", name: "Islamic Society of Tampa Bay Area", address: "7326 E Sligh Ave", city: "Tampa", state: "Florida", stateCode: "FL", zip: "33610", lat: 27.9906, lng: -82.3734 },
  { id: "fl-6", name: "Jacksonville Islamic Center", address: "2333 St Johns Bluff Rd S", city: "Jacksonville", state: "Florida", stateCode: "FL", zip: "32246", lat: 30.2967, lng: -81.5009 },

  // Georgia
  { id: "ga-1", name: "Al-Farooq Masjid of Atlanta", address: "442 14th St NW", city: "Atlanta", state: "Georgia", stateCode: "GA", zip: "30318", lat: 33.7933, lng: -84.3964, phone: "(404) 874-7521" },
  { id: "ga-2", name: "Islamic Center of North Fulton", address: "12300 Crabapple Rd", city: "Alpharetta", state: "Georgia", stateCode: "GA", zip: "30004", lat: 34.0754, lng: -84.3011 },
  { id: "ga-3", name: "Masjid Rahmah", address: "5200 Snapfinger Woods Dr", city: "Decatur", state: "Georgia", stateCode: "GA", zip: "30035", lat: 33.7313, lng: -84.2137 },

  // Hawaii
  { id: "hi-1", name: "Masjid Al-Rahman", address: "1935 Aleo Pl", city: "Honolulu", state: "Hawaii", stateCode: "HI", zip: "96816", lat: 21.2980, lng: -157.8200 },
  { id: "hi-2", name: "Islamic Society of Hawaii", address: "1935 Aleo Pl", city: "Honolulu", state: "Hawaii", stateCode: "HI", zip: "96816", lat: 21.2982, lng: -157.8205 },

  // Idaho
  { id: "id-1", name: "Islamic Center of Boise", address: "3880 N Maple Grove Rd", city: "Boise", state: "Idaho", stateCode: "ID", zip: "83704", lat: 43.6330, lng: -116.2897 },
  { id: "id-2", name: "Masjid Abubakr As-Siddiq", address: "724 S Kimball Ave", city: "Caldwell", state: "Idaho", stateCode: "ID", zip: "83605", lat: 43.6641, lng: -116.6873 },

  // Illinois
  { id: "il-1", name: "Islamic Foundation", address: "300 W Highridge Rd", city: "Villa Park", state: "Illinois", stateCode: "IL", zip: "60181", lat: 41.8672, lng: -87.9931, phone: "(630) 941-8800" },
  { id: "il-2", name: "Mosque Foundation", address: "7360 W 93rd St", city: "Bridgeview", state: "Illinois", stateCode: "IL", zip: "60455", lat: 41.7428, lng: -87.7990 },
  { id: "il-3", name: "Downtown Islamic Center", address: "218 S Wabash Ave", city: "Chicago", state: "Illinois", stateCode: "IL", zip: "60604", lat: 41.8785, lng: -87.6260 },
  { id: "il-4", name: "Muslim Community Center", address: "4380 N Elston Ave", city: "Chicago", state: "Illinois", stateCode: "IL", zip: "60641", lat: 41.9682, lng: -87.7283 },
  { id: "il-5", name: "Islamic Society of Naperville", address: "19 E Van Buren Ave", city: "Naperville", state: "Illinois", stateCode: "IL", zip: "60540", lat: 41.7847, lng: -88.1442 },

  // Indiana
  { id: "in-1", name: "Islamic Society of Greater Indianapolis", address: "5402 E 38th St", city: "Indianapolis", state: "Indiana", stateCode: "IN", zip: "46218", lat: 39.8309, lng: -86.0641 },
  { id: "in-2", name: "Islamic Center of Fort Wayne", address: "4944 Vance Ave", city: "Fort Wayne", state: "Indiana", stateCode: "IN", zip: "46805", lat: 41.1127, lng: -85.1000 },

  // Iowa
  { id: "ia-1", name: "Islamic Center of Des Moines", address: "5885 Franklin Ave", city: "Des Moines", state: "Iowa", stateCode: "IA", zip: "50321", lat: 41.5592, lng: -93.6665 },
  { id: "ia-2", name: "Islamic Center of Iowa City", address: "20 E Market St", city: "Iowa City", state: "Iowa", stateCode: "IA", zip: "52245", lat: 41.6601, lng: -91.5350 },

  // Kansas
  { id: "ks-1", name: "Islamic Society of Wichita", address: "7600 E 13th St N", city: "Wichita", state: "Kansas", stateCode: "KS", zip: "67206", lat: 37.7145, lng: -97.2456 },
  { id: "ks-2", name: "Islamic Center of Topeka", address: "1 SW Jewell Ave", city: "Topeka", state: "Kansas", stateCode: "KS", zip: "66606", lat: 39.0497, lng: -95.6974 },

  // Kentucky
  { id: "ky-1", name: "Islamic Center of Louisville", address: "3013 Bardstown Rd", city: "Louisville", state: "Kentucky", stateCode: "KY", zip: "40205", lat: 38.2165, lng: -85.6803 },
  { id: "ky-2", name: "Islamic Society of Lexington", address: "649 Lane Allen Rd", city: "Lexington", state: "Kentucky", stateCode: "KY", zip: "40504", lat: 38.0291, lng: -84.5380 },

  // Louisiana
  { id: "la-1", name: "Islamic Society of Greater New Orleans", address: "4200 Old Gentilly Rd", city: "New Orleans", state: "Louisiana", stateCode: "LA", zip: "70126", lat: 29.9837, lng: -90.0395 },
  { id: "la-2", name: "Masjid Ibrahim", address: "5510 Greenwell Springs Rd", city: "Baton Rouge", state: "Louisiana", stateCode: "LA", zip: "70806", lat: 30.4870, lng: -91.0800 },

  // Maine
  { id: "me-1", name: "Islamic Center of Maine", address: "148 Silver St", city: "Waterville", state: "Maine", stateCode: "ME", zip: "04901", lat: 44.5438, lng: -69.6356 },
  { id: "me-2", name: "Masjid Al-Huda", address: "186 Ocean Ave", city: "Portland", state: "Maine", stateCode: "ME", zip: "04103", lat: 43.6770, lng: -70.2780 },

  // Maryland
  { id: "md-1", name: "Islamic Society of Baltimore", address: "6631 Johnnycake Rd", city: "Windsor Mill", state: "Maryland", stateCode: "MD", zip: "21244", lat: 39.3218, lng: -76.7724 },
  { id: "md-2", name: "Dar Al-Hijrah Islamic Center", address: "3159 Row St", city: "Falls Church", state: "Maryland", stateCode: "MD", zip: "22042", lat: 38.8710, lng: -77.2025 },
  { id: "md-3", name: "Muslim Community Center", address: "15200 New Hampshire Ave", city: "Silver Spring", state: "Maryland", stateCode: "MD", zip: "20905", lat: 39.0679, lng: -76.9900 },

  // Massachusetts
  { id: "ma-1", name: "Islamic Society of Boston", address: "204 Prospect St", city: "Cambridge", state: "Massachusetts", stateCode: "MA", zip: "02139", lat: 42.3656, lng: -71.0967, phone: "(617) 876-3546" },
  { id: "ma-2", name: "Islamic Center of New England", address: "470 S Union St", city: "Sharon", state: "Massachusetts", stateCode: "MA", zip: "02067", lat: 42.1000, lng: -71.1786 },
  { id: "ma-3", name: "Masjid Al-Qur'an", address: "35 Intervale St", city: "Boston", state: "Massachusetts", stateCode: "MA", zip: "02121", lat: 42.3116, lng: -71.0835 },

  // Michigan
  { id: "mi-1", name: "Islamic Center of America", address: "19500 Ford Rd", city: "Dearborn", state: "Michigan", stateCode: "MI", zip: "48128", lat: 42.3223, lng: -83.1763, phone: "(313) 593-0000", website: "https://www.icofa.com" },
  { id: "mi-2", name: "The American Moslem Society", address: "9945 W Vernor Hwy", city: "Dearborn", state: "Michigan", stateCode: "MI", zip: "48120", lat: 42.3084, lng: -83.1742 },
  { id: "mi-3", name: "Masjid Wali Muhammad", address: "11529 Linwood Ave", city: "Detroit", state: "Michigan", stateCode: "MI", zip: "48206", lat: 42.3725, lng: -83.1005 },
  { id: "mi-4", name: "Islamic Center of Grand Rapids", address: "1021 Lake Dr SE", city: "Grand Rapids", state: "Michigan", stateCode: "MI", zip: "49506", lat: 42.9454, lng: -85.6334 },

  // Minnesota
  { id: "mn-1", name: "Islamic Cultural Society", address: "1401 E Lake St", city: "Minneapolis", state: "Minnesota", stateCode: "MN", zip: "55407", lat: 44.9490, lng: -93.2448 },
  { id: "mn-2", name: "Dar Al-Hijrah Mosque", address: "6715 Minnehaha Ave S", city: "Minneapolis", state: "Minnesota", stateCode: "MN", zip: "55423", lat: 44.8934, lng: -93.2333 },
  { id: "mn-3", name: "Islamic Civic Society of America", address: "1516 E Lake St", city: "Minneapolis", state: "Minnesota", stateCode: "MN", zip: "55407", lat: 44.9488, lng: -93.2370 },

  // Mississippi
  { id: "ms-1", name: "Islamic Center of Mississippi", address: "2 Calloway Dr", city: "Jackson", state: "Mississippi", stateCode: "MS", zip: "39204", lat: 32.3087, lng: -90.1982 },

  // Missouri
  { id: "mo-1", name: "Islamic Foundation of Greater St. Louis", address: "314 South New Ballas Rd", city: "St. Louis", state: "Missouri", stateCode: "MO", zip: "63141", lat: 38.6595, lng: -90.4126 },
  { id: "mo-2", name: "Masjid Omar", address: "3600 Campbell Ave", city: "Kansas City", state: "Missouri", stateCode: "MO", zip: "64109", lat: 39.0729, lng: -94.5742 },

  // Montana
  { id: "mt-1", name: "Islamic Center of Montana", address: "2611 King Ave W", city: "Billings", state: "Montana", stateCode: "MT", zip: "59102", lat: 45.7791, lng: -108.5572 },

  // Nebraska
  { id: "ne-1", name: "Islamic Foundation of Nebraska", address: "3610 Fontenelle Blvd", city: "Omaha", state: "Nebraska", stateCode: "NE", zip: "68104", lat: 41.3097, lng: -95.9965 },
  { id: "ne-2", name: "Lincoln Islamic Center", address: "8700 Adams St", city: "Lincoln", state: "Nebraska", stateCode: "NE", zip: "68507", lat: 40.8527, lng: -96.6362 },

  // Nevada
  { id: "nv-1", name: "Nevada Muslim Community", address: "4730 E Desert Inn Rd", city: "Las Vegas", state: "Nevada", stateCode: "NV", zip: "89121", lat: 36.1046, lng: -115.0698 },
  { id: "nv-2", name: "Masjid Ibrahim of Las Vegas", address: "5595 Mountain Vista St", city: "Las Vegas", state: "Nevada", stateCode: "NV", zip: "89120", lat: 36.0916, lng: -115.0894 },

  // New Hampshire
  { id: "nh-1", name: "Islamic Society of Seacoast Area", address: "1017 Islington St", city: "Portsmouth", state: "New Hampshire", stateCode: "NH", zip: "03801", lat: 43.0748, lng: -70.7588 },

  // New Jersey
  { id: "nj-1", name: "Islamic Society of Central Jersey", address: "4145 US-1", city: "Monmouth Junction", state: "New Jersey", stateCode: "NJ", zip: "08852", lat: 40.3734, lng: -74.5488 },
  { id: "nj-2", name: "Al-Huda Islamic Center", address: "900 Hamilton Blvd", city: "South Plainfield", state: "New Jersey", stateCode: "NJ", zip: "07080", lat: 40.5840, lng: -74.4090 },
  { id: "nj-3", name: "Islamic Center of Passaic County", address: "152 Derrom Ave", city: "Paterson", state: "New Jersey", stateCode: "NJ", zip: "07504", lat: 40.9213, lng: -74.1648 },
  { id: "nj-4", name: "Masjid Al-Wadud", address: "265 Main St", city: "Hackensack", state: "New Jersey", stateCode: "NJ", zip: "07601", lat: 40.8859, lng: -74.0435 },

  // New Mexico
  { id: "nm-1", name: "Islamic Center of New Mexico", address: "1100 Yale Blvd SE", city: "Albuquerque", state: "New Mexico", stateCode: "NM", zip: "87106", lat: 35.0689, lng: -106.6292 },
  { id: "nm-2", name: "Masjid Al-Nour", address: "1201 University Ave", city: "Las Cruces", state: "New Mexico", stateCode: "NM", zip: "88001", lat: 32.3199, lng: -106.7637 },

  // New York
  { id: "ny-1", name: "Islamic Cultural Center of New York", address: "1711 3rd Ave", city: "New York", state: "New York", stateCode: "NY", zip: "10029", lat: 40.7793, lng: -73.9630, phone: "(212) 722-5234" },
  { id: "ny-2", name: "Masjid Al-Taqwa", address: "1266 Bedford Ave", city: "Brooklyn", state: "New York", stateCode: "NY", zip: "11216", lat: 40.6752, lng: -73.9504 },
  { id: "ny-3", name: "Islamic Center at New York University", address: "238 Thompson St", city: "New York", state: "New York", stateCode: "NY", zip: "10012", lat: 40.7293, lng: -74.0008 },
  { id: "ny-4", name: "Masjid Makkah", address: "2254 7th Ave", city: "New York", state: "New York", stateCode: "NY", zip: "10030", lat: 40.8152, lng: -73.9500 },
  { id: "ny-5", name: "Islamic Center of Long Island", address: "835 Brush Hollow Rd", city: "Westbury", state: "New York", stateCode: "NY", zip: "11590", lat: 40.7505, lng: -73.5840 },
  { id: "ny-6", name: "Masjid Al-Ikhlas", address: "1 Eldridge St", city: "New York", state: "New York", stateCode: "NY", zip: "10002", lat: 40.7145, lng: -73.9945 },

  // North Carolina
  { id: "nc-1", name: "Islamic Association of Raleigh", address: "808 Atwater St", city: "Raleigh", state: "North Carolina", stateCode: "NC", zip: "27607", lat: 35.7842, lng: -78.6866, phone: "(919) 834-9572" },
  { id: "nc-2", name: "Islamic Center of Charlotte", address: "1700 Progress Ct", city: "Charlotte", state: "North Carolina", stateCode: "NC", zip: "28205", lat: 35.2269, lng: -80.7940 },
  { id: "nc-3", name: "Masjid Ash-Shaheed", address: "1030 N Graham St", city: "Charlotte", state: "North Carolina", stateCode: "NC", zip: "28206", lat: 35.2389, lng: -80.8421 },

  // North Dakota
  { id: "nd-1", name: "Islamic Society of Fargo-Moorhead", address: "4400 19th Ave N", city: "Fargo", state: "North Dakota", stateCode: "ND", zip: "58102", lat: 46.9170, lng: -96.8193 },

  // Ohio
  { id: "oh-1", name: "Noor Islamic Cultural Center", address: "5001 Wilcox Rd", city: "Dublin", state: "Ohio", stateCode: "OH", zip: "43016", lat: 40.0799, lng: -83.1283, phone: "(614) 889-2004" },
  { id: "oh-2", name: "Islamic Center of Cleveland", address: "7325 Carnegie Ave", city: "Cleveland", state: "Ohio", stateCode: "OH", zip: "44103", lat: 41.5021, lng: -81.6412 },
  { id: "oh-3", name: "Masjid As-Salaam", address: "1476 E Broad St", city: "Columbus", state: "Ohio", stateCode: "OH", zip: "43205", lat: 39.9596, lng: -82.9683 },
  { id: "oh-4", name: "Islamic Society of Greater Dayton", address: "26 Josie St", city: "Dayton", state: "Ohio", stateCode: "OH", zip: "45403", lat: 39.7670, lng: -84.1491 },

  // Oklahoma
  { id: "ok-1", name: "Islamic Society of Greater Oklahoma City", address: "3815 N St Clair Ave", city: "Oklahoma City", state: "Oklahoma", stateCode: "OK", zip: "73112", lat: 35.5196, lng: -97.5632 },
  { id: "ok-2", name: "Islamic Society of Tulsa", address: "4818 S Gary Ave", city: "Tulsa", state: "Oklahoma", stateCode: "OK", zip: "74105", lat: 36.0853, lng: -95.9318 },

  // Oregon
  { id: "or-1", name: "Salman Al-Farisi Islamic Center", address: "2885 NW 29th St", city: "Corvallis", state: "Oregon", stateCode: "OR", zip: "97330", lat: 44.5800, lng: -123.2890 },
  { id: "or-2", name: "Bilal Mosque", address: "13020 NE Halsey St", city: "Portland", state: "Oregon", stateCode: "OR", zip: "97230", lat: 45.5394, lng: -122.5097 },
  { id: "or-3", name: "Islamic Society of Greater Portland", address: "10009 NE Prescott St", city: "Portland", state: "Oregon", stateCode: "OR", zip: "97220", lat: 45.5534, lng: -122.5593 },

  // Pennsylvania
  { id: "pa-1", name: "Masjid Al-Jamia", address: "4228 Walnut St", city: "Philadelphia", state: "Pennsylvania", stateCode: "PA", zip: "19104", lat: 39.9526, lng: -75.2030 },
  { id: "pa-2", name: "Islamic Center of Pittsburgh", address: "4100 Bigelow Blvd", city: "Pittsburgh", state: "Pennsylvania", stateCode: "PA", zip: "15213", lat: 40.4514, lng: -79.9524 },
  { id: "pa-3", name: "Masjid Al-Qur'an", address: "1234 N 52nd St", city: "Philadelphia", state: "Pennsylvania", stateCode: "PA", zip: "19131", lat: 39.9881, lng: -75.2346 },

  // Rhode Island
  { id: "ri-1", name: "Islamic Center of Rhode Island", address: "320 Reservoir Ave", city: "Providence", state: "Rhode Island", stateCode: "RI", zip: "02907", lat: 41.8070, lng: -71.4368 },

  // South Carolina
  { id: "sc-1", name: "Islamic Society of Greater Columbia", address: "7765 Parklane Rd", city: "Columbia", state: "South Carolina", stateCode: "SC", zip: "29223", lat: 34.0810, lng: -80.9654 },
  { id: "sc-2", name: "Jame Masjid of Charleston", address: "1621 Ashley Hall Rd", city: "Charleston", state: "South Carolina", stateCode: "SC", zip: "29407", lat: 32.7831, lng: -79.9863 },

  // South Dakota
  { id: "sd-1", name: "Islamic Society of South Dakota", address: "3709 S Prairie Ave", city: "Sioux Falls", state: "South Dakota", stateCode: "SD", zip: "57103", lat: 43.5224, lng: -96.7387 },

  // Tennessee
  { id: "tn-1", name: "Islamic Center of Nashville", address: "2515 Nolensville Pike", city: "Nashville", state: "Tennessee", stateCode: "TN", zip: "37211", lat: 36.0978, lng: -86.7462 },
  { id: "tn-2", name: "Memphis Islamic Center", address: "10750 Shelby Oaks Dr", city: "Memphis", state: "Tennessee", stateCode: "TN", zip: "38134", lat: 35.1837, lng: -89.8580 },
  { id: "tn-3", name: "Annoor Mosque", address: "1420 Jouney St NW", city: "Knoxville", state: "Tennessee", stateCode: "TN", zip: "37921", lat: 35.9932, lng: -83.9724 },

  // Texas
  { id: "tx-1", name: "Islamic Society of Greater Houston", address: "3110 Eastside St", city: "Houston", state: "Texas", stateCode: "TX", zip: "77098", lat: 29.7373, lng: -95.3851 },
  { id: "tx-2", name: "Al-Farooq Masjid Houston", address: "1702 S Post Oak Rd", city: "Houston", state: "Texas", stateCode: "TX", zip: "77056", lat: 29.7388, lng: -95.4628 },
  { id: "tx-3", name: "Irving Islamic Center", address: "2600 Nursery Rd", city: "Irving", state: "Texas", stateCode: "TX", zip: "75061", lat: 32.8311, lng: -96.9836 },
  { id: "tx-4", name: "Plano Islamic Center", address: "1301 Coit Rd", city: "Plano", state: "Texas", stateCode: "TX", zip: "75075", lat: 33.0366, lng: -96.7264 },
  { id: "tx-5", name: "Islamic Center of San Antonio", address: "4707 Blanco Rd", city: "San Antonio", state: "Texas", stateCode: "TX", zip: "78212", lat: 29.4906, lng: -98.5251 },
  { id: "tx-6", name: "Masjid Al-Islam Dallas", address: "8200 S Central Expy", city: "Dallas", state: "Texas", stateCode: "TX", zip: "75241", lat: 32.6842, lng: -96.7721 },
  { id: "tx-7", name: "East Plano Islamic Center", address: "900 Shiloh Rd", city: "Plano", state: "Texas", stateCode: "TX", zip: "75074", lat: 33.0189, lng: -96.6714 },
  { id: "tx-8", name: "Masjid Al-Noor", address: "9600 Stacy Rd", city: "Allen", state: "Texas", stateCode: "TX", zip: "75013", lat: 33.1001, lng: -96.6697 },

  // Utah
  { id: "ut-1", name: "Khadeejah Islamic Center", address: "740 S 200 W", city: "Salt Lake City", state: "Utah", stateCode: "UT", zip: "84101", lat: 40.7548, lng: -111.8960 },
  { id: "ut-2", name: "Utah Islamic Center", address: "6965 S State St", city: "Midvale", state: "Utah", stateCode: "UT", zip: "84047", lat: 40.6118, lng: -111.8917 },

  // Vermont
  { id: "vt-1", name: "Islamic Society of Vermont", address: "156 Elmwood Ave", city: "Burlington", state: "Vermont", stateCode: "VT", zip: "05401", lat: 44.4793, lng: -73.2162 },

  // Virginia
  { id: "va-1", name: "ADAMS Center", address: "46903 Sugarland Rd", city: "Sterling", state: "Virginia", stateCode: "VA", zip: "20164", lat: 38.9942, lng: -77.4107, phone: "(703) 421-4140", website: "https://www.adamscenter.org" },
  { id: "va-2", name: "Dar Al-Hijrah Islamic Center", address: "3159 Row St", city: "Falls Church", state: "Virginia", stateCode: "VA", zip: "22042", lat: 38.8710, lng: -77.2025 },
  { id: "va-3", name: "Islamic Center of Virginia", address: "1241 Buford Rd", city: "Richmond", state: "Virginia", stateCode: "VA", zip: "23235", lat: 37.4908, lng: -77.5542 },
  { id: "va-4", name: "Masjid Al-Haqq", address: "514 Islamic Way", city: "Norfolk", state: "Virginia", stateCode: "VA", zip: "23504", lat: 36.8588, lng: -76.2823 },

  // Washington
  { id: "wa-1", name: "Islamic Center of Seattle", address: "1420 NE Northgate Way", city: "Seattle", state: "Washington", stateCode: "WA", zip: "98125", lat: 47.6978, lng: -122.3173 },
  { id: "wa-2", name: "Eastside Islamic Center", address: "15840 NE 4th St", city: "Bellevue", state: "Washington", stateCode: "WA", zip: "98008", lat: 47.6151, lng: -122.1258 },
  { id: "wa-3", name: "Muslim Association of Puget Sound", address: "18130 Midvale Ave N", city: "Shoreline", state: "Washington", stateCode: "WA", zip: "98133", lat: 47.7440, lng: -122.3437 },

  // West Virginia
  { id: "wv-1", name: "Islamic Association of West Virginia", address: "213 Willey St", city: "Morgantown", state: "West Virginia", stateCode: "WV", zip: "26505", lat: 39.6345, lng: -79.9556 },

  // Wisconsin
  { id: "wi-1", name: "Islamic Society of Milwaukee", address: "4707 S 13th St", city: "Milwaukee", state: "Wisconsin", stateCode: "WI", zip: "53221", lat: 42.9729, lng: -87.9399 },
  { id: "wi-2", name: "Masjid Al-Noor Wisconsin", address: "5109 S 27th St", city: "Milwaukee", state: "Wisconsin", stateCode: "WI", zip: "53221", lat: 42.9564, lng: -87.9635 },
  { id: "wi-3", name: "Islamic Center of Madison", address: "21 N Park St", city: "Madison", state: "Wisconsin", stateCode: "WI", zip: "53715", lat: 43.0722, lng: -89.3918 },

  // Wyoming
  { id: "wy-1", name: "Islamic Society of Wyoming", address: "1829 Capitol Ave", city: "Cheyenne", state: "Wyoming", stateCode: "WY", zip: "82001", lat: 41.1386, lng: -104.8197 },
];

export function getMasjidsByState(stateCode: string): Masjid[] {
  return MASJIDS.filter((m) => m.stateCode === stateCode);
}

export function getMasjidsByCity(stateCode: string, city: string): Masjid[] {
  return MASJIDS.filter(
    (m) =>
      m.stateCode === stateCode &&
      m.city.toLowerCase() === city.toLowerCase()
  );
}

export function getCitiesByState(stateCode: string): string[] {
  const cities = MASJIDS.filter((m) => m.stateCode === stateCode).map(
    (m) => m.city
  );
  return [...new Set(cities)].sort();
}

export function getMasjidById(id: string): Masjid | undefined {
  return MASJIDS.find((m) => m.id === id);
}

export function searchMasjids(query: string): Masjid[] {
  const q = query.toLowerCase();
  return MASJIDS.filter(
    (m) =>
      m.name.toLowerCase().includes(q) ||
      m.city.toLowerCase().includes(q) ||
      m.state.toLowerCase().includes(q) ||
      m.address.toLowerCase().includes(q)
  );
}
