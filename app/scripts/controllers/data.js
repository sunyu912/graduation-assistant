var coreCourses = [
{
	'id' : 'CS130',
	'name' : 'Discrete Structures',
	'credit' : 4,
	'prereq' : [ ],
	'comment' : 'With eligibility for MAT112'
},
{
	'id' : 'CS140',
	'name' : 'Introduction to Computer Science',
	'credit' : 4,
	'prereq' : [ ],
	'comment' : 'With eligibility for MAT114'
},
{
	'id' : 'CS141',
	'name' : 'Introduction to Programming and Problem-Solving',
	'credit' : 4,
	'prereq' : [ 'CS140' ]
},
{
	'id' : 'CS210',
	'name' : 'Computer Logic',
	'credit' : 4,
	'prereq' : [ 'CS130' ]

},
{
	'id' : 'CS240',
	'name' : 'Data Structures and Algorithms I',
	'credit' : 4,
	'prereq' : [ 'CS130', 'CS141' ]
},
{
	'id' : 'CS241',
	'name' : 'Data Structures and Algorithms II',
	'credit' : 4,
	'prereq' : [ 'CS240' ]
},
{
	'id' : 'CS256',
	'name' : 'C++ Programming',
	'credit' : 4,
	'prereq' : [ 'CS141' ]
},
{
	'id' : 'CS264',
	'name' : 'Computer Organization and Assembly Programming',
	'credit' : 4,
	'prereq' : [ 'CS210' ]
},
{
	'id' : 'CS301',
	'name' : 'Numerical Methods',
	'credit' : 4,
	'prereq' : [ 'MAT208', 'CS241' ]
},
{
	'id' : 'CS311',
	'name' : 'Formal Languages and Automata',
	'credit' : 4,
	'prereq' : [ 'CS241' ]
},
{
	'id' : 'CS331',
	'name' : 'Design and Analysis of Algorithms',
	'credit' : 4,
	'prereq' : [ 'CS241' ]
},
{
	'id' : 'CS365',
	'name' : 'Computer Architecture',
	'credit' : 4,
	'prereq' : [ 'CS264' ]
},
{
	'id' : 'CS408',
	'name' : 'Programming Languages',
	'credit' : 4,
	'prereq' : [ 'CS311', 'CS264', 'CS256' ]
},
{
	'id' : 'CS431',
	'name' : 'Operating Systems',
	'credit' : 4,
	'prereq' : [ 'CS241' ]
},
{
	'id' : 'CS463',
	'name' : 'Undergraduate Seminar',
	'credit' : 2,
	'prereq' : [ 'Senior Status', 'GWT' ]
},
{
	'id' : 'CS480',
	'name' : 'Software Engineering',
	'credit' : 4,
	'prereq' : [ 'CS241' ]
}
]

var coreElective = [
{
	'id' : 'CS245',
	'name' : 'Programming Graphical User Interfaces',
	'credit' : 4,
	'prereq' : [ 'CS141' ]	
},
{
	'id' : 'CS260',
	'name' : 'Unix and Scripting',
	'credit' : 4,
	'prereq' : [ 'CS141' ]
},
{
	'id' : 'CS352',
	'name' : 'Symbolic Programming',
	'credit' : 4,
	'prereq' : [ 'CS241' ]
},
{
	'id' : 'CS356',
	'name' : 'Object-Oriented Design and Programming',
	'credit' : 4,
	'prereq' : [ 'CS241' ]
},
{
	'id' : 'CS370',
	'name' : 'Parallel Processing',
	'credit' : 4,
	'prereq' : [ 'CS331' ]
},
{
	'id' : 'CS380',
	'name' : 'Computer Networks',
	'credit' : 4,
	'prereq' : [ 'CS241' ]
},
{
	'id' : 'CS411',
	'name' : 'Compilers and Interpreters',
	'credit' : 4,
	'prereq' : [ 'CS311' ]
},
{
	'id' : 'CS420',
	'name' : 'Artificial Intelligence',
	'credit' : 4,
	'prereq' : [ 'CS311' ]
},
{
	'id' : 'CS435',
	'name' : 'Database Systems',
	'credit' : 4,
	'prereq' : [ 'CS241' ]
},
{
	'id' : 'CS445',
	'name' : 'Computer Graphics',
	'credit' : 4,
	'prereq' : [ 'CS241' ]
},
{
	'id' : 'CS450',
	'name' : 'Computability',
	'credit' : 4,
	'prereq' : [ 'CS311' ]
},
{
	'id' : 'CS460',
	'name' : 'Secure Communication',
	'credit' : 4,
	'prereq' : [ 'CS241' ]
},
{
	'id' : 'CS470',
	'name' : 'Game Development',
	'credit' : 4,
	'prereq' : [ 'CS241' ]
},
{
	'id' : 'CS481',
	'name' : 'Software Engineering Practice',
	'credit' : 4,
	'prereq' : [ 'CS480' ]
},
{
	'id' : 'CS490',
	'name' : 'Honors',
	'credit' : 4,
	'prereq' : [  ],
	'comment' : 'With consent from the instructor'
},
{
	'id' : 'CS499',
	'name' : 'Special Topics for Upper Division Students',
	'credit' : 4,
	'min' : 1,
	'max' : 4,
	'prereq' : [  ],
	'comment' : 'With consent from the instructor'
},
{
	'id' : 'CS200',
	'name' : 'Special Study for Lower Division Students',
	'credit' : 2,
	'max' : 2,
	'min' : 1,
	'prereq' : [  ],
	'comment' : 'With consent from the instructor'
},
{
	'id' : 'CS299',
	'name' : 'Special Topics for Lower Division Students',
	'credit' : 4,
	'min' : 1,
	'max' : 4,
	'prereq' : [  ],
	'comment' : 'With consent from the instructor'
},
{
	'id' : 'CS400',
	'name' : 'Special Study for Upper Division Students',
	'credit' : 2,
	'max' : 4,
	'min' : 1,
	'prereq' : [  ],
	'comment' : 'With consent from the instructor'
},
{
	'id' : 'CS461',
	'name' : 'Senior Project',
	'credit' : 2,
	'prereq' : [  ],
	'comment' : 'With consent from the instructor'
},
{
	'id' : 'CS462',
	'name' : 'Senior Project',
	'credit' : 2,
	'prereq' : [  ],
	'comment' : 'With consent from the instructor'
},
{
	'id' : 'EGR461',
	'name' : 'Engineering Interdisciplinary Clinic I',
	'credit' : 3,
	'prereq' : [  ],
	'comment' : 'With consent from the instructor'
},
{
	'id' : 'EGR462',
	'name' : 'Engineering Interdisciplinary Clinic II',
	'credit' : 3,
	'prereq' : [  ],
	'comment' : 'With consent from the instructor'
},
{
	'id' : 'EGR463',
	'name' : 'Engineering Interdisciplinary Clinic III',
	'credit' : 3,
	'prereq' : [  ],
	'comment' : 'With consent from the instructor'
},
{
	'id' : 'MAT216',
	'name' : 'Differential Equations',
	'credit' : 4,
	'prereq' : [  ]	
},
{
	'id' : 'MAT370',
	'name' : 'Graph Theory',
	'credit' : 4,
	'prereq' : [  ]	
},
{
	'id' : 'MAT380',
	'name' : 'Mathematics of Operations Research',
	'credit' : 4,
	'prereq' : [  ]	
},
{
	'id' : 'MAT381',
	'name' : 'Mathematics of Operations Research',
	'credit' : 4,
	'prereq' : [  ]	
},
{
	'id' : 'MAT402',
	'name' : 'Numerical Methods in Differential Equations',
	'credit' : 4,
	'prereq' : [  ]	
},
{
	'id' : 'MAT470',
	'name' : 'Combinatorics',
	'credit' : 4,
	'prereq' : [  ]	
},
{
	'id' : 'MAT480',
	'name' : 'Mathematical Programming',
	'credit' : 4,
	'prereq' : [  ]	
},
{
	'id' : 'MAT485',
	'name' : 'Mathematical Modeling and Simulation',
	'credit' : 4,
	'prereq' : [  ]	
},
{
	'id' : 'MAT486',
	'name' : 'Mathematical Modeling and Simulation',
	'credit' : 4,
	'prereq' : [  ]	
},
{
	'id' : 'SCI470',
	'name' : 'Cooperative Education',
	'credit' : 4,
	'min' : 1,
	'max' : 4,
	'prereq' : [  ]	
},
{
	'id' : 'SCI471',
	'name' : 'Cooperative Education',
	'credit' : 4,
	'min' : 1,
	'max' : 4,
	'prereq' : [  ]	
},
{
	'id' : 'SCI472',
	'name' : 'Cooperative Education',
	'credit' : 4,
	'min' : 1,
	'max' : 4,
	'prereq' : [  ]	
},
{
	'id' : 'SCI473',
	'name' : 'Cooperative Education',
	'credit' : 4,
	'min' : 1,
	'max' : 4,
	'prereq' : [  ]	
}
]

var coreSupport = [
{
	'id' : 'BIO110',
	'name' : 'Life Science',
	'credit' : 3,
	'prereq' : [  ]	 
},
{
	'id' : 'BIO110L',
	'name' : 'Life Science Laboratory',
	'credit' : 1,
	'prereq' : [  ]	
},
{
	'id' : 'CS375',
	'name' : 'Computers and Society',
	'credit' : 4,
	'prereq' : [  ]	
},
{
	'id' : 'MAT114',
	'name' : 'Analytic Geometry and Calculus I',
	'credit' : 4,
	'prereq' : [  ],
	'comment' : 'With eligibility for MAT114'
},
{
	'id' : 'MAT115',
	'name' : 'Analytic Geometry and Calculus II',
	'credit' : 4,
	'prereq' : [ 'MAT114' ]
},
{
	'id' : 'MAT116',
	'name' : 'Analytic Geometry and Calculus III',
	'credit' : 4,
	'prereq' : [ 'MAT115' ]
},
{
	'id' : 'MAT208',
	'name' : 'Introduction to Linear Algebra',
	'credit' : 4,
	'prereq' : [ 'MAT214' ]
},
{
	'id' : 'MAT214',
	'name' : 'Calculus of Several Variables I',
	'credit' : 3,
	'prereq' : [ 'MAT115' ]
},
{
	'id' : 'PHY131',
	'name' : 'General Physics',
	'credit' : 3,
	'prereq' : [ 'MAT115' ]
},
{
	'id' : 'PHY131L',
	'name' : 'General Physics Laboratory',
	'credit' : 1,
	'prereq' : [ 'MAT115' ]
},
{
	'id' : 'PHY132',
	'name' : 'General Physics',
	'credit' : 3,
	'prereq' : [ 'MAT116', 'PHY131', 'PHY131L' ]
},
{
	'id' : 'PHY132L',
	'name' : 'General Physics Laboratory',
	'credit' : 1,
	'prereq' : [ 'MAT116', 'PHY131', 'PHY131L' ]
},
{
	'id' : 'PHY133',
	'name' : 'General Physics',
	'credit' : 3,
	'prereq' : [ 'MAT116', 'PHY131', 'PHY131L' ]
},
{
	'id' : 'PHY133L',
	'name' : 'General Physics Laboratory',
	'credit' : 1,
	'prereq' : [ 'MAT116', 'PHY131', 'PHY131L' ]
},
{
	'id' : 'STA326',
	'name' : 'Statistical Methods for Computer Scientists',
	'credit' : 4,
	'prereq' : [ 'MAT214' ]
}
]

var semCoreCourses = [
{
	'id' : 'CS1300',
	'name' : 'Discrete Structures',
	'credit' : 4,
	'equivalent' : [ 'CS130' ],
	'prereq' : [],
	'comment' : 'With eligibility for MAT1140'
},
{
	'id' : 'CS1400',
	'name' : 'Introduction to Programming and Problem Solving',
	'credit' : 4,
	'equivalent' : [ 'CS140', 'CS141' ],
	'prereq' : [],
	'comment' : 'With eligibility for MAT1140'
},
{
	'id' : 'CS2400',
	'name' : 'Data Structures and Advanced Programming',
	'credit' : 4,
	'equivalent' : [ 'CS240', 'CS241' ],
	'prereq' : [ 'CS1300', 'CS1400', 'MAT1140' ]
},
{
	'id' : 'CS2640',
	'name' : 'Computer Organization and Assembly Programming',
	'credit' : 3,
	'equivalent' : [ 'CS264' ],
	'prereq' : [ 'CS2400' ]
},
{
	'id' : 'CS3110',
	'name' : 'Formal Languages and Automata',
	'credit' : 3,
	'equivalent' : [ 'CS311' ],
	'prereq' : [ 'CS2400' ]
},
{
	'id' : 'CS3310',
	'name' : 'Design and Analysis of Algorithms',
	'credit' : 4,
	'equivalent' : [ 'CS331' ],
	'prereq' : [ 'CS2400', 'MAT2250' ]
},
{
	'id' : 'CS3650',
	'name' : 'Computer Architecture',
	'credit' : 4,
	'equivalent' : [ 'CS210', 'CS365' ],
	'prereq' : [ 'CS2640' ]
},
{
	'id' : 'CS3750',
	'name' : 'Computers and Society',
	'credit' : 3,
	'equivalent' : [ 'CS375' ],
	'prereq' : [ ]
},
{
	'id' : 'CS4080',
	'name' : 'Programming Languages',
	'credit' : 3,
	'equivalent' : [ 'CS408' ],
	'prereq' : [ 'CS2640', 'CS3110']
},
{
	'id' : 'CS4310',
	'name' : 'Operating Systems',
	'credit' : 3,
	'equivalent' : [ 'CS431' ],
	'prereq' : [ 'CS3650' ]
},
{
	'id' : 'CS4630',
	'name' : 'Undergraduate Seminar',
	'credit' : 1,
	'equivalent' : [ 'CS463' ],
	'prereq' : [ 'Senior Status', 'GWT' ]
},
{
	'id' : 'CS4800',
	'name' : 'Software Engineering',
	'credit' : 3,
	'equivalent' : [ 'CS480' ],
	'prereq' : [ 'CS3310' ]
},
{
	'id' : 'BIO1110',
	'name' : 'Life Science',
	'credit' : 2,
	'equivalent' : [ 'BIO110' ],
	'prereq' : [ ]
},
{
	'id' : 'BIO1110L',
	'name' : 'Life Science Lab',
	'credit' : 1,
	'equivalent' : [ 'BIO110L' ],
	'prereq' : [  ]
},
{
	'id' : 'MAT1140',
	'name' : 'Calculus I',
	'credit' : 4,
	'equivalent' : [ 'MAT114', 'MAT115'],
	'prereq' : [  ],
	'comment' : 'With eligibility for MAT1140'
},
{
	'id' : 'MAT1150',
	'name' : 'Calculus II',
	'credit' : 4,
	'equivalent' : [ 'MAT114', 'MAT115', 'MAT116' ],
	'prereq' : [ 'MAT1140' ]
},
{
	'id' : 'MAT2250',
	'name' : 'Linear Algebra with Applications to Differential Equations',
	'credit' : 4,
	'equivalent' : [ 'MAT208' ],
	'prereq' : [ 'MAT1150' ]
},
{
	'id' : 'PHY1510',
	'name' : 'Introduction to Newtonian Mechanics',
	'credit' : 3,
	'equivalent' : [ 'PHY131', 'PHY131L', 'PHY132', 'PHY132L' ],
	'prereq' : [ 'MAT1150' ]
},
{
	'id' : 'PHY1510L',
	'name' : 'Introduction to Newtonian Mechanics Lab',
	'credit' : 1,
	'equivalent' : [ 'PHY131', 'PHY131L', 'PHY132', 'PHY132L' ],
	'prereq' : [ 'MAT1150' ]
},
{
	'id' : 'PHY1520',
	'name' : 'Introduction to Electromagnetism and Circuits',
	'credit' : 3,
	'equivalent' : [ 'PHY131', 'PHY131L', 'PHY132', 'PHY132L', 'PHY133', 'PHY133L' ],
	'prereq' : [ 'MAT1150', 'PHY1510', 'PHY1510L' ]
},
{
	'id' : 'PHY1520L',
	'name' : 'Introduction to Electromagnetism and Circuits Lab',
	'credit' : 1,
	'equivalent' : [ 'PHY131', 'PHY131L', 'PHY132', 'PHY132L', 'PHY133', 'PHY133L' ],
	'prereq' : [ 'MAT1150', 'PHY1510', 'PHY1510L' ]
},
{
	'id' : 'STA2260',
	'name' : 'Probability and Statistics for Computer Scientists and Engineers',
	'credit' : 3,
	'equivalent' : [ 'STA326' ],
	'prereq' : [ 'MAT1150' ]
}
]

var semCoreElective = [
{
	'id' : 'CS2450',
	'name' : 'Programming Graphical User Interfaces',
	'credit' : 3,
	'equivalent' : [ 'CS245' ],
	'prereq' : [ 'CS1400' ]
},
{
	'id' : 'CS2560',
	'name' : 'C++ Programming',
	'credit' : 3,
	'equivalent' : [ 'CS256' ],
	'prereq' : [ 'CS1400' ]
},
{
	'id' : 'CS2600',
	'name' : 'Unix and Scripting',
	'credit' : 3,
	'equivalent' : [ 'CS260' ],
	'prereq' : [ 'CS1400' ]
},
{
	'id' : 'CS2990',
	'name' : 'Special Topics for Lower Division Students',
	'credit' : 3,
	'equivalent' : [ 'CS299' ],
	'prereq' : [ ],
	'min' : 1,
	'max' : 3,
	'allowMultiple' : true,
	'comment' : 'With consent from the instructor'
},
{
	'id' : 'CS3010',
	'name' : 'Numerical Methods',
	'credit' : 3,
	'equivalent' : [ 'CS301' ],
	'prereq' : [ 'MAT2250', 'CS2400' ]
},
{
	'id' : 'CS3520',
	'name' : 'Symbolic Programming',
	'credit' : 3,
	'equivalent' : [ 'CS352' ],
	'prereq' : [ 'CS2400' ]
},
{
	'id' : 'CS3560',
	'name' : 'Object-Oriented Design and Programming',
	'credit' : 3,
	'equivalent' : [ 'CS356' ],
	'prereq' : [ 'CS2400' ]
},
{
	'id' : 'CS3700',
	'name' : 'Parallel Processing',
	'credit' : 3,
	'equivalent' : [ 'CS370' ],
	'prereq' : [ 'CS3310' ]
},
{
	'id' : 'CS3800',
	'name' : 'Computer Networks',
	'credit' : 3,
	'equivalent' : [ 'CS380' ],
	'prereq' : [ 'CS2400' ]
},
{
	'id' : 'CS4110',
	'name' : 'Compilers and Interpreters',
	'credit' : 3,
	'equivalent' : [ 'CS411' ],
	'prereq' : [ 'CS3110' ]
},
{
	'id' : 'CS4200',
	'name' : 'Artificial Intelligence',
	'credit' : 3,
	'equivalent' : [ 'CS420' ],
	'prereq' : [ 'CS3310' ]
},
{
	'id' : 'CS4350',
	'name' : 'Database Systems',
	'credit' : 3,
	'equivalent' : [ 'CS435' ],
	'prereq' : [ 'CS2400' ]
},
{
	'id' : 'CS4450',
	'name' : 'Computer Graphics',
	'credit' : 3,
	'equivalent' : [ 'CS445' ],
	'prereq' : [ 'CS2400' ]
},
{
	'id' : 'CS4500',
	'name' : 'Computability',
	'credit' : 3,
	'equivalent' : [ 'CS450' ],
	'prereq' : [ 'CS3110' ]
},
{
	'id' : 'CS4600',
	'name' : 'Secure Communication',
	'credit' : 3,
	'equivalent' : [ 'CS460' ],
	'prereq' : [ 'CS2400' ]
},
{
	'id' : 'CS4650',
	'name' : 'Big Data Analytics and Cloud Computing',
	'credit' : 3,
	'equivalent' : [ 'CS465' ],
	'prereq' : [ 'CS2400' ]
},
{
	'id' : 'CS4700',
	'name' : 'Game Development',
	'credit' : 3,
	'equivalent' : [ 'CS470' ],
	'prereq' : [ 'CS2400' ]
},
{
	'id' : 'CS4810',
	'name' : 'Software Engineering Practice',
	'credit' : 3,
	'equivalent' : [ 'CS481' ],
	'prereq' : [ 'CS4800' ]
},
{
	'id' : 'CS4900',
	'name' : 'Honors',
	'credit' : 3,
	'equivalent' : [ 'CS490' ],
	'prereq' : [ ]
},
{
	'id' : 'CS4990',
	'name' : 'Special Topics for Upper Division Students',
	'credit' : 3,
	'min' : 1,
	'max' : 3,
	'equivalent' : [ 'CS499' ],
	'prereq' : [ ],
	'allowMultiple' : true,
	'comment' : 'With consent from the instructor'
},
{
	'id' : 'CS2000',
	'name' : 'Special Study for Lower Division Students',
	'credit' : 1,
	'equivalent' : [ 'CS200' ],
	'prereq' : [ ],
	'comment' : 'With consent from the instructor'
},
{
	'id' : 'CS4000',
	'name' : 'Special Study for Upper Division Students',
	'credit' : 1,
	'equivalent' : [ 'CS400' ],
	'prereq' : [ ],
	'comment' : 'With consent from the instructor'
},
{
	'id' : 'CS4410',
	'name' : 'Internship in Computer Science',
	'credit' : 1,
	'equivalent' : [ 'CS441' ],
	'prereq' : [ ],
	'min' : 1,
	'max' : 2,
	'comment' : 'With consent from the instructor'
},
{
	'id' : 'CS4610',
	'name' : 'Senior Project',
	'credit' : 1,
	'equivalent' : [ 'CS461' ],
	'prereq' : [ ],
	'comment' : 'With consent from the instructor'
},
{
	'id' : 'CS4620',
	'name' : 'Senior Project',
	'credit' : 1,
	'equivalent' : [ 'CS462' ],
	'prereq' : [ ],
	'comment' : 'With consent from the instructor'
},
{
	'id' : 'MAT3470',
	'name' : 'Combinatorics',
	'credit' : 3,
	'equivalent' : [ 'MAT347' ],
	'prereq' : [ ]
},
{
	'id' : 'MAT3800',
	'name' : 'Mathematics of Operations Research',
	'credit' : 3,
	'equivalent' : [ 'MAT380' ],
	'prereq' : [ ]
},
{
	'id' : 'MAT3810',
	'name' : 'Mathematics of Operations Research',
	'credit' : 4,
	'equivalent' : [ 'MAT381' ],
	'prereq' : [ ]
},
{
	'id' : 'MAT4020',
	'name' : 'Introduction to Numerical Analysis II',
	'credit' : 3,
	'equivalent' : [ 'MAT402' ],
	'prereq' : [ ]
},
{
	'id' : 'MAT4750',
	'name' : 'Graph Theory',
	'credit' : 3,
	'equivalent' : [ 'CS475' ],
	'prereq' : [ ]	
},
{
	'id' : 'MAT4800',
	'name' : 'Mathematical Programming',
	'credit' : 4,
	'equivalent' : [ 'MAT480' ],
	'prereq' : [ ]
},
{
	'id' : 'MAT4850',
	'name' : 'Mathematical Modeling I',
	'credit' : 4,
	'equivalent' : [ 'MAT485' ],
	'prereq' : [ ]
},
{
	'id' : 'MAT4860',
	'name' : 'Mathematical Modeling II',
	'credit' : 3,
	'equivalent' : [ 'MAT486' ],
	'prereq' : [ ]
}
]