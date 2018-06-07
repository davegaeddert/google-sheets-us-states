var by_abbr = { 
    
    // US States
    'AL':'Alabama',
    'AK':'Alaska',
    'AZ':'Arizona',
    'AR':'Arkansas',
    'CA':'California',
    'CO':'Colorado',
    'CT':'Connecticut',
    'DE':'Delaware',
    'FL':'Florida',
    'GA':'Georgia',
    'HI':'Hawaii',
    'ID':'Idaho',
    'IL':'Illinois',
    'IN':'Indiana',
    'IA':'Iowa',
    'KS':'Kansas',
    'KY':'Kentucky',
    'LA':'Louisiana',
    'ME':'Maine',
    'MD':'Maryland',
    'MA':'Massachusetts',
    'MI':'Michigan',
    'MN':'Minnesota',
    'MS':'Mississippi',
    'MO':'Missouri',
    'MT':'Montana',
    'NE':'Nebraska',
    'NV':'Nevada',
    'NH':'New Hampshire',
    'NJ':'New Jersey',
    'NM':'New Mexico',
    'NY':'New York',
    'NC':'North Carolina',
    'ND':'North Dakota',
    'OH':'Ohio',
    'OK':'Oklahoma',
    'OR':'Oregon',
    'PA':'Pennsylvania',
    'RI':'Rhode Island',
    'SC':'South Carolina',
    'SD':'South Dakota',
    'TN':'Tennessee',
    'TX':'Texas',
    'UT':'Utah',
    'VT':'Vermont',
    'VA':'Virginia',
    'WA':'Washington',
    'WV':'West Virginia',
    'WI':'Wisconsin',
    'WY':'Wyoming',
   
    'DC':'District of Columbia',
    
    // US territories
    'AS':'American Samoa',
    'GU':'Guam',
    'MP':'Northern Mariana Islands',
    'PR':'Puerto Rico',
    'VI':'United States Virgin Islands',
    
    // US Armed Forces
    'AA':'Armed Forces Americas',
    'AE':'Armed Forces',
    'AP':'Armed Forces Pacific',
    
    // Canada
    'AB':'Alberta',
    'BC':'British Columbia',
    'MB':'Manitoba',
    'NB':'New Brunswick',
    'NL':'Newfoundland and Labrador',
    'NS':'Nova Scotia',
    'NT':'Northwest Territories',
    'NU':'Nunavut',
    'ON':'Ontario',
    'PE':'Prince Edward Island',
    'QC':'Quebec',
    'SK':'Saskatchewan',
    'YT':'Yukon'
    
}

// store the inverse as a separate object
var by_full = {};
for (var prop in by_abbr) {
    if(by_abbr.hasOwnProperty(prop)) {
        by_full[by_abbr[prop]] = prop;
    }
}

/**
 * Convert a US State abbreviation to its full name.
 *
 * @param {text} input The value or range of cells to convert.
 * @return Full state name.
 * @customfunction
 */
function STATE_ABBREVIATION_TO_FULL(input) {
  if (input.map) {            // Test whether input is an array.
    return input.map(STATE_ABBREVIATION_TO_FULL); // Recurse over array if so.
  } else {
    return by_abbr[input];
  }
}

/**
 * Convert a US State name to its abbreviation.
 *
 * @param {text} input The value or range of cells to convert.
 * @return State abbreviation.
 * @customfunction
 */
function STATE_FULL_TO_ABBREVIATION(input) {
  if (input.map) {            // Test whether input is an array.
    return input.map(STATE_FULL_TO_ABBREVIATION); // Recurse over array if so.
  } else {
    return by_full[input];
  }
}
