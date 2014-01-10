var users = {
  "JOHN": {
    title: "JOHN",
    userid: "foobar",
    password: "foopassword",
    email: "foo@bar.com",
    name: "John Foo Bar",
    profile: {
      message: "",
      location: "",
      gender: "",
      nationality: ""
    }
  },
  "JAMES_B": {
    title: "JAMES_B",
    userid: "james",
    password: "pass",
    email: "james@bar.com",
    name: "James Doe",
    profile: {
      message: "",
      location: "",
      gender: "",
      nationality: ""
    }
  },
  "JAMES": {
    title: "JAMES",
    userid: "james",
    password: "pass",
    email: "james@bar.com",
    name: "James Doe",
    profile: {
      message: "livin la vida loca",
      location: "the moon",
      gender: "M",
      nationality: "Turkish"
    }
  },
  "MARK": {
    title: "MARK",
    userid: "mark",
    password: "pass",
    email: "mark@bar.com",
    name: "Mark Doe",
    profile: {
      message: "I am Mark",
      location: "",
      gender: "M",
      nationality: ""
    }
  },
  "JESSICA": {
    title: "JESSICA",
    userid: "jessica",
    password: "pass",
    email: "jessica@bar.com",
    name: "Jessica Doe",
    profile: {
      message: "",
      location: "",
      gender: "",
      nationality: ""
    }
  },
  "CASSANDRA": {
    title: "CASSANDRA",
    userid: "cassandra",
    password: "pass",
    email: "cassandra@bar.com",
    name: "Cassandra Doe",
    profile: {
      message: "",
      location: "",
      gender: "",
      nationality: ""
    }
  },
  "STEVE": {
    title: "STEVE",
    userid: "steve",
    password: "pass",
    email: "steve@bar.com",
    name: "Steve",
    profile: {
      message: "",
      location: "",
      gender: "",
      nationality: ""
    }
  }
};

var tests =
{
  "INSTL-SRV": 
  {
    title: "Client Register",
    caseId: "INSTL-SRV",
    priority: "High",
    moduleName: "Client registration screen",
    rfcReferences: ["3.1.1"],
    testTitle: "Register a new user with valid parameters",
    description: "Install server",
    target: "Server",
    designed: {
      by: null,
      date: null
    },
    executed: {
      by: null,
      date: null
    },
    preConditions: ["Host machine is able to listen to incoming traffic on the fixed TCP port 8544"],
    dependencies: [],
    steps: [
      {
        description: "Follow installation guidelines",
        data: "",
        expected: "Server installed and started successfully",
        actual: null,
        status: null,
        notes: null
      }
    ],
    postConditions: ["Server is operational"],
    testData: []
  },
  
  "INSTL-CLN": 
  {
    title: "Client Register",
    caseId: "INSTL-CLN",
    priority: "High",
    moduleName: "Client registration screen",
    rfcReferences: ["4.1.1"],
    testTitle: "Register a new user with valid parameters",
    description: "Install client",
    target: "Client",
    designed: {
      by: null,
      date: null
    },
    executed: {
      by: null,
      date: null
    },
    preConditions: ["Host machine is able to listen to incoming traffic on the fixed TCP port 8545", "Host machine is able to use the fixed TCP port 8545 for outgoing traffic", "Host machine is able to use the fixed TCP port 8544 for outgoing traffic"],
    dependencies: [],
    steps: [
      {
        description: "Follow installation guidelines",
        data: "",
        expected: "Client installed and started successfully",
        actual: null,
        status: null,
        notes: null
      }
    ],
    postConditions: ["Client is operational"],
    testData: []
  },
  
  "RGSTR-IE": 
  {
    title: "Client Register",
    caseId: "CRGSTR-IE",
    priority: "High",
    moduleName: "Client registration screen",
    rfcReferences: ["2.1.3.1", "CRGSTR: Client Register"],
    testTitle: "Register a new user with valid parameters",
    description: "Enter a series of invalid email addresses at registration form",
    target: "Client",
    designed: {
      by: null,
      date: null
    },
    executed: {
      by: null,
      date: null
    },
    preConditions: ["Registration form is filled with valid parameters except for email"],
    dependencies: [],
    steps: [
      {
        description: "Enter email and click Register button",
        data: "",
        expected: "Invalid email",
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "Enter email and click Register button",
        data: "foobar",
        expected: "Invalid email",
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "Enter email and click Register button",
        data: "foo@bar",
        expected: "Invalid email",
        actual: null,
        status: null,
        notes: null
      }
    ],
    postConditions: ["No CRGSTR requests were sent to server"],
    testData: []
  },
  
  "RGSTR-IP": 
  {
    title: "Client Register",
    caseId: "RGSTR-IP",
    priority: "High",
    moduleName: "Client registration screen",
    rfcReferences: ["2.1.3.1", "CRGSTR: Client Register"],
    testTitle: "Register a new user with valid parameters",
    description: "Enter non-matching passwords at registration form",
    target: "Client",
    designed: {
      by: null,
      date: null
    },
    executed: {
      by: null,
      date: null
    },
    preConditions: ["Registration form is filled with valid parameters except for passwords"],
    dependencies: [],
    steps: [
      {
        description: "Enter password",
        data: "foopassword",
        expected: null,
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "Re-enter password and click Register button",
        data: "",
        expected: "Passwords do not match",
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "Re-enter password and click Register button",
        data: "foo",
        expected: "Passwords do not match",
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "Re-enter password and click Register button",
        data: "foopassworf",
        expected: "Passwords do not match",
        actual: null,
        status: null,
        notes: null
      }
    ],
    postConditions: ["No CRGSTR requests were sent to server"],
    testData: []
  },
  
  "RGSTR-OK": 
  {
    title: "Client Register",
    caseId: "RGSTR-OK",
    priority: "High",
    moduleName: "Client registration screen",
    rfcReferences: ["2.1.3.1", "3.1.2", "CRGSTR: Client Register"],
    testTitle: "Register a new user with valid parameters",
    description: "Register a new user with valid parameters",
    target: "Server, Client",
    designed: {
      by: null,
      date: null
    },
    executed: {
      by: null,
      date: null
    },
    preConditions: ["A user with userid \"foobar\" does not exist"],
    dependencies: [],
    steps: [
      {
        description: "Enter email",
        data: "foo@bar.com",
        expected: null,
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "Enter name",
        data: "John Foo Bar",
        expected: null,
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "Enter username",
        data: "foobar",
        expected: null,
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "Enter password",
        data: "foopassword",
        expected: null,
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "Re-enter password",
        data: "foopassword",
        expected: null,
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "Click Register button",
        data: "#1",
        expected: "Registration successful",
        actual: null,
        status: null,
        notes: null
      }
    ],
    postConditions: ["JOHN is registered"],
    testData: [
      {
        id: "#1",
        request: 'CRGSTR\n{\n  "seqid": xxxx,\n  "email": "foo@bar.com",\n  "password": "foopassword",\n  "userid": "foobar",\n  "name": "John Foo Bar"\n}',
        response: 'SRVROK\n{\n  "seqid": xxxx\n}'
      }
    ]
  },
  
  "RGSTR-DU": 
  {
    title: "Client Register",
    caseId: "RGSTR-DU",
    priority: "High",
    moduleName: "Client registration screen",
    rfcReferences: ["3.1.3", "CRGSTR: Client Register"],
    testTitle: "Register a new user with valid parameters",
    description: "Attempt to register with an existing username",
    target: "Server, Client",
    designed: {
      by: null,
      date: null
    },
    executed: {
      by: null,
      date: null
    },
    preConditions: ["JOHN is registered"],
    dependencies: ["RGSTR-OK"],
    steps: [
      {
        description: "Enter email",
        data: "foo2@bar.com",
        expected: null,
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "Enter name",
        data: "James Foo Bar",
        expected: null,
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "Enter username",
        data: "foobar",
        expected: null,
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "Enter password",
        data: "passwordfoo",
        expected: null,
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "Re-enter password",
        data: "passwordfoo",
        expected: null,
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "Click Register button",
        data: "#1",
        expected: "Registration error",
        actual: null,
        status: null,
        notes: null
      }
    ],
    postConditions: ["Registration failed"],
    testData: [
      {
        id: "#1",
        request: 'CRGSTR\n{\n  "seqid": xxxx,\n  "email": "foo2@bar.com",\n  "password": "passwordfoo",\n  "userid": "foobar",\n  "name": "James Foo Bar"\n}',
        response: 'SRVERR\n{\n  "seqid": xxxx\n}'
      }
    ]
  },
  
  "LOGIN-OK": 
  {
    title: "Client Login",
    caseId: "LOGIN-OK",
    priority: "High",
    moduleName: "Client login screen",
    rfcReferences: ["2.1.3.2", "3.1.3", "3.1.4", "CLOGIN: Client Login"],
    testTitle: "Verify login with valid username and password",
    description: "Login with valid parameters",
    target: "Server, Client",
    designed: {
      by: null,
      date: null
    },
    executed: {
      by: null,
      date: null
    },
    preConditions: ["JOHN is registered"],
    dependencies: ["RGSTR-OK"],
    steps: [
      {
        description: "Enter username",
        data: "foobar",
        expected: null,
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "Enter password",
        data: "foopassword",
        expected: null,
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "Click Login button",
        data: "#1",
        expected: "JOHN is logged in",
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "Observe sent requests with Wireshark for 30 seconds",
        data: null,
        expected: "At least 2 client heartbeat requests are caught",
        actual: null,
        status: null,
        notes: null
      }
    ],
    postConditions: ["JOHN is logged in", "Client is sending heartbeats"],
    testData: [
      {
        id: "#1",
        request: 'CLOGIN\n{\n  "seqid": xxxx,\n  "userid": "foobar",\n  "password": "foopassword"\n}',
        response: 'SRVROK\n{\n  "seqid": xxxx\n}'
      }
    ]
  },
  
  "LOGIN-EP": 
  {
    title: "Client Login",
    caseId: "LOGIN-EP",
    priority: "High",
    moduleName: "Client login screen",
    rfcReferences: ["2.1.3.2", "3.1.3", "3.1.4", "CLOGIN: Client Login"],
    testTitle: "Verify login with valid username and password",
    description: "Attempt to login with empty password",
    target: "Server, Client",
    designed: {
      by: null,
      date: null
    },
    executed: {
      by: null,
      date: null
    },
    preConditions: ["JOHN is registered", "JOHN is not logged in"],
    dependencies: ["RGSTR-OK"],
    steps: [
      {
        description: "Enter username",
        data: "foobar",
        expected: null,
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "Enter password",
        data: "",
        expected: null,
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "Click Login button",
        data: "#1",
        expected: "Login error",
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "Inject a heartbeat",
        data: "#2",
        expected: "Server returned error",
        actual: null,
        status: null,
        notes: null
      }
    ],
    postConditions: ["JOHN is not logged in"],
    testData: [
      {
        id: "#1",
        request: 'CLOGIN\n{\n  "seqid": xxxx,\n  "userid": "foobar",\n  "password": ""\n}',
        response: 'SRVERR\n{\n  "seqid": xxxx\n}'
      },
      {
        id: "#2",
        request: 'CHBEAT\n{\n  "seqid": 1234\n}',
        response: 'SRVERR\n{\n  "seqid": 1234\n}'
      }
    ]
  },
  
  "LOGIN-IP": 
  {
    title: "Client Login",
    caseId: "LOGIN-IP",
    priority: "High",
    moduleName: "Client login screen",
    rfcReferences: ["2.1.3.2", "3.1.3", "3.1.4", "CLOGIN: Client Login"],
    testTitle: "Verify login with valid username and password",
    description: "Attempt to login with invalid password",
    target: "Server, Client",
    designed: {
      by: null,
      date: null
    },
    executed: {
      by: null,
      date: null
    },
    preConditions: ["JOHN is registered", "JOHN is not logged in"],
    dependencies: ["RGSTR-OK"],
    steps: [
      {
        description: "Enter username",
        data: "foobar",
        expected: null,
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "Enter password",
        data: "foopassworf",
        expected: null,
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "Click Login button",
        data: "#1",
        expected: "Login error",
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "Inject a heartbeat",
        data: "#2",
        expected: "Server returned error",
        actual: null,
        status: null,
        notes: null
      }
    ],
    postConditions: ["JOHN is not logged in"],
    testData: [
      {
        id: "#1",
        request: 'CLOGIN\n{\n  "seqid": xxxx,\n  "userid": "foobar",\n  "password": "foopassworf"\n}',
        response: 'SRVERR\n{\n  "seqid": xxxx\n}'
      },
      {
        id: "#2",
        request: 'CHBEAT\n{\n  "seqid": 1234\n}',
        response: 'SRVERR\n{\n  "seqid": 1234\n}'
      }
    ]
  },
  
  "LOGIN-NP": 
  {
    title: "Client Login",
    caseId: "LOGIN-IP",
    priority: "High",
    moduleName: "Client login screen",
    rfcReferences: ["2.1.3.2", "3.1.3", "3.1.4", "CLOGIN: Client Login"],
    testTitle: "Verify login with valid username and password",
    description: "Inject a login with missing password field",
    target: "Server",
    designed: {
      by: null,
      date: null
    },
    executed: {
      by: null,
      date: null
    },
    preConditions: ["JOHN is registered", "JOHN is not logged in"],
    dependencies: ["RGSTR-OK"],
    steps: [
      {
        description: "Inject a login message with no password field",
        data: "#1",
        expected: "Login error",
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "Inject a heartbeat",
        data: "#2",
        expected: "Server returned error",
        actual: null,
        status: null,
        notes: null
      }
    ],
    postConditions: ["JOHN is not logged in"],
    testData: [
      {
        id: "#1",
        request: 'CLOGIN\n{\n  "seqid": xxxx,\n  "userid": "foobar"\n}',
        response: 'SRVERR\n{\n  "seqid": xxxx\n}'
      },
      {
        id: "#2",
        request: 'CHBEAT\n{\n  "seqid": 1234\n}',
        response: 'SRVERR\n{\n  "seqid": 1234\n}'
      }
    ]
  },
  
  "HBEAT-FQ": 
  {
    title: "Client Heartbeat",
    caseId: "HBEAT-FQ",
    priority: "High",
    moduleName: "Client Heartbeat to Server",
    rfcReferences: ["3.1.6", "CHBEAT: Client Heartbeat"],
    testTitle: "Heartbeat of client",
    description: "Check the frequency of heartbeat messages",
    target: "Client",
    designed: {
      by: null,
      date: null
    },
    executed: {
      by: null,
      date: null
    },
    preConditions: ["JOHN is logged in", "JOHN has no contacts, offline messages, or contact requests"],
    dependencies: ["LOGIN-OK"],
    steps: [
      {
        description: "Observe requests with Wireshark",
        data: "#1",
        expected: "Catch heartbeat requests",
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "Calculate the frequency of CHBEAT messages",
        data: null,
        expected: "Messages sent and acknowledged every 10 seconds",
        actual: null,
        status: null,
        notes: null
      }
    ],
    postConditions: ["JOHN is logged in"],
    testData: [
      {
        id: "#1",
        request: 'CHBEAT\n{\n  "seqid": xxxx,\n}',
        response: 'SRVROK\n{\n  "seqid": xxxx,\n  "contacts": [],\n  "inbox": [],\n  "requests": []\n}'
      }
    ]
  },
  
  "DISCON": 
  {
    title: "Client Login",
    caseId: "DISCON",
    priority: "High",
    moduleName: "Client login screen",
    rfcReferences: ["4.1.10"],
    testTitle: "Verify login with valid username and password",
    description: "Client disconnects automatically after not being able to contact to server for 30 seconds",
    target: "Client",
    designed: {
      by: null,
      date: null
    },
    executed: {
      by: null,
      date: null
    },
    preConditions: ["JOHN is logged in"],
    dependencies: ["LOGIN-OK"],
    steps: [
      {
        description: "Cut off the internet connection of the client and wait for 30 seconds",
        data: null,
        expected: "Client logs off and returns to login screen",
        actual: null,
        status: null,
        notes: null
      }
    ],
    postConditions: ["JOHN is not logged in"],
    testData: []
  },
  
  "FIND-1": 
  {
    title: "Client Find User",
    caseId: "FIND-1",
    priority: "High",
    moduleName: "Client Can Find Other Clients",
    rfcReferences: ["2.1.3.6", "3.1.3", "3.1.7", "4.1.4", "CFINDU: Client Find User"],
    testTitle: "Find User",
    description: "Search and find other users",
    target: "Server, Client",
    designed: {
      by: null,
      date: null
    },
    executed: {
      by: null,
      date: null
    },
    preConditions: ["JOHN is logged in", "JAMES is registered", "MARK is registered", "JESSICA is registered", "CASSANDRA is registered"],
    dependencies: ["LOGIN-OK"],
    steps: [
      {
        description: "Enter search keyword",
        data: "es",
        expected: null,
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "Click Find User button",
        data: "#1",
        expected: "JAMES and JESSICA are returned",
        actual: null,
        status: null,
        notes: null
      }
    ],
    postConditions: ["JAMES and JESSICA are found with search"],
    testData: [
      {
        id: "#1",
        request: 'CFINDU\n{\n  "seqid": xxxx,\n  "keyword":  "es"\n}',
        response: 'SRVROK\n{\n  "seqid": xxxx,\n  "matches": [\n    {\n      "userid": "james",\n      "profile": {\n        "message": "livin la vida loca",\n        "location": "the moon",\n        "gender": "M",\n        "nationality": "Turkish"\n      }\n    },\n    {\n      "userid": "jessica",\n      "profile": {\n        "message": "",\n        "location": "",\n        "gender": "",\n        "nationality": ""\n      }\n    }\n  ]\n}'
      }
    ]
  },
  
  "FIND-2": 
  {
    title: "Client Find User",
    caseId: "FIND-2",
    priority: "High",
    moduleName: "Client Can Find Other Clients",
    rfcReferences: ["2.1.3.6", "3.1.3", "3.1.7", "4.1.4", "CFINDU: Client Find User"],
    testTitle: "Find User",
    description: "Search and find other users",
    target: "Server, Client",
    designed: {
      by: null,
      date: null
    },
    executed: {
      by: null,
      date: null
    },
    preConditions: ["JOHN is logged in", "JAMES is registered", "MARK is registered", "JESSICA is registered", "CASSANDRA is registered"],
    dependencies: ["LOGIN-OK"],
    steps: [
      {
        description: "Enter search keyword",
        data: "ca",
        expected: null,
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "Click Find User button",
        data: "#1",
        expected: "JESSICA and CASSANDRA are returned",
        actual: null,
        status: null,
        notes: null
      }
    ],
    postConditions: ["JESSICA and CASSANDRA are found with search"],
    testData: [
      {
        id: "#1",
        request: 'CFINDU\n{\n  "seqid": xxxx,\n  "keyword":  "ca"\n}',
        response: 'SRVROK\n{\n  "seqid": xxxx,\n  "matches": [\n    {\n      "userid": "jessica",\n      "profile": {\n        "message": "",\n        "location": "",\n        "gender": "",\n        "nationality": ""\n      }\n    },\n    {\n      "userid": "cassandra",\n      "profile": {\n        "message": "",\n        "location": "",\n        "gender": "",\n        "nationality": ""\n      }\n    }\n  ]\n}'
      }
    ]
  },
  
  "FIND-3": 
  {
    title: "Client Find User",
    caseId: "FIND-3",
    priority: "High",
    moduleName: "Client Can Find Other Clients",
    rfcReferences: ["2.1.3.6", "3.1.3", "3.1.7", "4.1.4", "CFINDU: Client Find User"],
    testTitle: "Find User",
    description: "Search and find other users",
    target: "Server, Client",
    designed: {
      by: null,
      date: null
    },
    executed: {
      by: null,
      date: null
    },
    preConditions: ["JOHN is logged in", "JAMES is registered", "MARK is registered", "JESSICA is registered", "CASSANDRA is registered"],
    dependencies: ["LOGIN-OK"],
    steps: [
      {
        description: "Enter search keyword",
        data: "mark",
        expected: null,
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "Click Find User button",
        data: "#1",
        expected: "MARK is returned",
        actual: null,
        status: null,
        notes: null
      }
    ],
    postConditions: ["MARK is found with search"],
    testData: [
      {
        id: "#1",
        request: 'CFINDU\n{\n  "seqid": xxxx,\n  "keyword":  "mark"\n}',
        response: 'SRVROK\n{\n  "seqid": xxxx,\n  "matches": [\n    {\n      "userid": "mark",\n      "profile": {\n        "message": "I am Mark",\n        "location": "",\n        "gender": "M",\n        "nationality": ""\n      }\n    }\n  ]\n}'
      }
    ]
  },
  
  "FIND-4": 
  {
    title: "Client Find User",
    caseId: "FIND-4",
    priority: "High",
    moduleName: "Client Can Find Other Clients",
    rfcReferences: ["2.1.3.6", "3.1.3", "3.1.7", "4.1.4", "CFINDU: Client Find User"],
    testTitle: "Find User",
    description: "Search and find other users",
    target: "Server, Client",
    designed: {
      by: null,
      date: null
    },
    executed: {
      by: null,
      date: null
    },
    preConditions: ["JOHN is logged in", "JAMES is registered", "MARK is registered", "JESSICA is registered", "CASSANDRA is registered"],
    dependencies: ["LOGIN-OK"],
    steps: [
      {
        description: "Enter search keyword",
        data: "sss",
        expected: null,
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "Click Find User button",
        data: "#1",
        expected: "None of the mentioned users are returned",
        actual: null,
        status: null,
        notes: null
      }
    ],
    postConditions: ["None of the mentioned users are found with search"],
    testData: [
      {
        id: "#1",
        request: 'CFINDU\n{\n  "seqid": xxxx,\n  "keyword":  "sss"\n}',
        response: 'SRVROK\n{\n  "seqid": xxxx,\n  "matches": []\n}'
      }
    ]
  },
  
  "CONREQ-OK": 
  {
    title: "Client Contact Request",
    caseId: "CONREQ-OK",
    priority: "High",
    moduleName: "Client Can Add Other Clients",
    rfcReferences: ["2.1.3.3", "3.1.5", "4.1.3", "CCNREQ: Client Contact Request"],
    testTitle: "Contact Request",
    description: "User adds another user as a contact",
    target: "Server, Client",
    designed: {
      by: null,
      date: null
    },
    executed: {
      by: null,
      date: null
    },
    preConditions: ["JOHN is logged in", "JESSICA is logged in", "JOHN and JESSICA are not contacts of each other", "JOHN has found JESSICA with search"],
    dependencies: ["FIND-3"],
    steps: [
      {
        description: "As JOHN click Contact Request button to send a request to JESSICA",
        data: "#1",
        expected: "Request sent successfully",
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "As JESSICA wait for next heartbeat",
        data: "#2",
        expected: "Request recieved",
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "As JESSICA accept the request",
        data: "#3",
        expected: "Request accepted successfully",
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "As JOHN wait for next heartbeat",
        data: "#4",
        expected: "Contact details of JESSICA recieved",
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "As JESSICA wait for next heartbeat",
        data: "#5",
        expected: "Contact details of JOHN recieved",
        actual: null,
        status: null,
        notes: null
      }
    ],
    postConditions: ["JOHN and JESSICA are contacts of each other"],
    testData: [
      {
        id: "#1",
        request: 'CCNREQ\n{\n  "seqid": xxxx,\n  "userid": "jessica"\n}',
        response: 'SRVROK\n{\n  "seqid": xxxx\n}'
      },
      {
        id: "#2",
        request: 'CHBEAT\n{\n  "seqid": yyyy\n}',
        response: 'SRVROK\n{\n  "seqid": yyyy,\n  "contacts": [],\n  "inbox": [],\n  "requests": [\n    {  \n      "senderid": "foobar",\n      "date": "YYYY-MM-DDTHH:mm:ss"\n    }\n  ]\n}'
      },
      {
        id: "#3",
        request: 'CCNRES\n{\n  "seqid": zzzz,\n  "userid": "foobar",\n  "response": "accept"\n}',
        response: 'SRVROK\n{\n  "seqid": zzzz\n}'
      },
      {
        id: "#4",
        request: 'CHBEAT\n{\n  "seqid": aaaa\n}',
        response: 'SRVROK\n{\n  "seqid": aaaa,\n  "contacts": [\n    {\n      "userid": "jessica",\n      "ip": "aaa.bbb.ccc.ddd",\n      "status": "online",\n      "profile": {\n        "message": "",\n        "location": "",\n        "gender": "",\n        "nationality": ""\n      }\n    }\n  ],\n  "inbox": [],\n  "requests": []\n}'
      },
      {
        id: "#5",
        request: 'CHBEAT\n{\n  "seqid": bbbb\n}',
        response: 'SRVROK\n{\n  "seqid": bbbb,\n  "contacts": [\n    {\n      "userid": "foobar",\n      "ip": "aaa.bbb.ccc.ddd",\n      "status": "online",\n      "profile": {\n        "message": "",\n        "location": "",\n        "gender": "",\n        "nationality": ""\n      }\n    }\n  ],\n  "inbox": [],\n  "requests": []\n}'
      }
    ]
  },
  
  "CONREQ-DN": 
  {
    title: "Client Contact Request",
    caseId: "CONREQ-DN",
    priority: "High",
    moduleName: "Client Can Add Other Clients",
    rfcReferences: ["2.1.3.3", "3.1.5", "4.1.3", "CCNREQ: Client Contact Request"],
    testTitle: "Contact Request",
    description: "User denies a contact request",
    target: "Server, Client",
    designed: {
      by: null,
      date: null
    },
    executed: {
      by: null,
      date: null
    },
    preConditions: ["JOHN is logged in", "JAMES is logged in", "JOHN and JAMES are not contacts of each other", "JOHN has found JAMES with search"],
    dependencies: ["FIND-3"],
    steps: [
      {
        description: "As JOHN click Contact Request button to send a request to JAMES",
        data: "#1",
        expected: "Request sent successfully",
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "As JAMES wait for next heartbeat",
        data: "#2",
        expected: "Request recieved",
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "As JAMES deny the request",
        data: "#3",
        expected: "Request denied successfully",
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "As JOHN wait for next heartbeat",
        data: "#4",
        expected: "Contact details of JAMES are not recieved",
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "As JAMES wait for next heartbeat",
        data: "#5",
        expected: "Contact details of JOHN are not recieved",
        actual: null,
        status: null,
        notes: null
      }
    ],
    postConditions: ["JOHN and JAMES are not contacts of each other"],
    testData: [
      {
        id: "#1",
        request: 'CCNREQ\n{\n  "seqid": xxxx,\n  "userid": "james"\n}',
        response: 'SRVROK\n{\n  "seqid": xxxx\n}'
      },
      {
        id: "#2",
        request: 'CHBEAT\n{\n  "seqid": yyyy\n}',
        response: 'SRVROK\n{\n  "seqid": yyyy,\n  "contacts": [],\n  "inbox": [],\n  "requests": [\n    {  \n      "senderid": "foobar",\n      "date": "YYYY-MM-DDTHH:mm:ss"\n    }\n  ]\n}'
      },
      {
        id: "#3",
        request: 'CCNRES\n{\n  "seqid": zzzz,\n  "userid": "foobar",\n  "response": "deny"\n}',
        response: 'SRVROK\n{\n  "seqid": zzzz\n}'
      },
      {
        id: "#4",
        request: 'CHBEAT\n{\n  "seqid": aaaa\n}',
        response: 'SRVROK\n{\n  "seqid": aaaa,\n  "contacts": [],\n  "inbox": [],\n  "requests": []\n}'
      },
      {
        id: "#5",
        request: 'CHBEAT\n{\n  "seqid": bbbb\n}',
        response: 'SRVROK\n{\n  "seqid": bbbb,\n  "contacts": [],\n  "inbox": [],\n  "requests": []\n}'
      }
    ]
  },
  
  "CONREQ-DB1": 
  {
    title: "Client Contact Request",
    caseId: "CONREQ-DB1",
    priority: "High",
    moduleName: "Client Can Add Other Clients",
    rfcReferences: ["2.1.3.3", "3.1.5", "4.1.3", "CCNREQ: Client Contact Request"],
    testTitle: "Contact Request",
    description: "User cannot send two contact requests to the same user",
    target: "Server, Client",
    designed: {
      by: null,
      date: null
    },
    executed: {
      by: null,
      date: null
    },
    preConditions: ["JOHN is logged in", "JAMES is logged in", "JOHN and JAMES are not contacts of each other", "JOHN has found JAMES with search"],
    dependencies: ["CONREQ-OK"],
    steps: [
      {
        description: "As JOHN click Contact Request button to send a request to JAMES",
        data: "#1",
        expected: "Request sent successfully",
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "As JAMES wait for next heartbeat",
        data: "#2",
        expected: "Request recieved",
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "As JOHN click Contact Request button to send a request to JAMES",
        data: "#3",
        expected: "Request cannot be sent",
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "As JAMES wait for next heartbeat",
        data: "#4",
        expected: "Only 1 request is recieved from JOHN",
        actual: null,
        status: null,
        notes: null
      }
    ],
    postConditions: ["JAMES recieved only 1 contact request from JOHN"],
    testData: [
      {
        id: "#1",
        request: 'CCNREQ\n{\n  "seqid": xxxx,\n  "userid": "james"\n}',
        response: 'SRVROK\n{\n  "seqid": xxxx\n}'
      },
      {
        id: "#2",
        request: 'CHBEAT\n{\n  "seqid": yyyy\n}',
        response: 'SRVROK\n{\n  "seqid": yyyy,\n  "contacts": [],\n  "inbox": [],\n  "requests": [\n    {  \n      "senderid": "foobar",\n      "date": "YYYY-MM-DDTHH:mm:ss"\n    }\n  ]\n}'
      },
      {
        id: "#3",
        request: 'CCNREQ\n{\n  "seqid": xxxx,\n  "userid": "james"\n}',
        response: 'SRVERR\n{\n  "seqid": xxxx\n}'
      },
      {
        id: "#4",
        request: 'CHBEAT\n{\n  "seqid": yyyy\n}',
        response: 'SRVROK\n{\n  "seqid": yyyy,\n  "contacts": [],\n  "inbox": [],\n  "requests": [\n    {  \n      "senderid": "foobar",\n      "date": "YYYY-MM-DDTHH:mm:ss"\n    }\n  ]\n}'
      }
    ]
  },
  
  "CONREQ-DB2": 
  {
    title: "Client Contact Request",
    caseId: "CONREQ-DB2",
    priority: "High",
    moduleName: "Client Can Add Other Clients",
    rfcReferences: ["2.1.3.3", "3.1.5", "4.1.3", "CCNREQ: Client Contact Request"],
    testTitle: "Contact Request",
    description: "User cannot send contact request if an incoming request already exists",
    target: "Server, Client",
    designed: {
      by: null,
      date: null
    },
    executed: {
      by: null,
      date: null
    },
    preConditions: ["JOHN is logged in", "JAMES is logged in", "JOHN and JAMES are not contacts of each other", "JOHN has sent JAMES a contact request", "JAMES has found JOHN with search"],
    dependencies: ["CONREQ-OK"],
    steps: [
      {
        description: "As JAMES click Contact Request button to send a request to JOHN",
        data: "#1",
        expected: "Request is not sent",
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "As JOHN wait for next heartbeat",
        data: "#2",
        expected: "No contact request from JAMES is recieved",
        actual: null,
        status: null,
        notes: null
      }
    ],
    postConditions: ["JOHN did not get a contact request from JAMES"],
    testData: [
      {
        id: "#1",
        request: 'CCNREQ\n{\n  "seqid": xxxx,\n  "userid": "foobar"\n}',
        response: 'SRVERR\n{\n  "seqid": xxxx\n}'
      },
      {
        id: "#2",
        request: 'CHBEAT\n{\n  "seqid": yyyy\n}',
        response: 'SRVROK\n{\n  "seqid": yyyy,\n  "contacts": [],\n  "inbox": [],\n  "requests": []\n}'
      }
    ]
  },
  
  "CONREQ-PER": 
  {
    title: "Client Contact Request",
    caseId: "CONREQ-DB2",
    priority: "High",
    moduleName: "Client Can Add Other Clients",
    rfcReferences: ["2.1.3.3", "3.1.5", "4.1.3", "CCNREQ: Client Contact Request"],
    testTitle: "Contact Request",
    description: "The server persists an open contact request",
    target: "Server, Client",
    designed: {
      by: null,
      date: null
    },
    executed: {
      by: null,
      date: null
    },
    preConditions: ["JOHN is logged in", "JAMES is logged in", "JOHN and JAMES are not contacts of each other", "JOHN has sent JAMES a contact request"],
    dependencies: ["CONREQ-OK"],
    steps: [
      {
        description: "As JAMES wait for the next 3 heartbeats",
        data: "#1",
        expected: "Contact request from JOHN is recieved in all heartbeats",
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "As JAMES close client, wait for at least 30 seconds, and log back in",
        data: null,
        expected: null,
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "As JAMES wait for the next 3 heartbeats",
        data: "#1",
        expected: "Contact request from JOHN is recieved in all heartbeats",
        actual: null,
        status: null,
        notes: null
      }
    ],
    postConditions: ["JAMES kept recieving contact request from JOHN"],
    testData: [
      {
        id: "#1",
        request: 'CHBEAT\n{\n  "seqid": xxxx\n}',
        response: 'SRVROK\n{\n  "seqid": xxxx,\n  "contacts": [],\n  "inbox": [],\n  "requests": [\n    {  \n      "senderid": "foobar",\n      "date": "YYYY-MM-DDTHH:mm:ss"\n    }\n  ]\n}'
      }
    ]
  },
  
  "CONREQ-RE": 
  {
    title: "Client Contact Request",
    caseId: "CONREQ-RE",
    priority: "High",
    moduleName: "Client Can Add Other Clients",
    rfcReferences: ["2.1.3.3", "3.1.5", "4.1.3", "CCNREQ: Client Contact Request"],
    testTitle: "Contact Request",
    description: "User sends a contact request after the first request is denied",
    target: "Server, Client",
    designed: {
      by: null,
      date: null
    },
    executed: {
      by: null,
      date: null
    },
    preConditions: ["JOHN is logged in", "JAMES is logged in", "JOHN and JAMES are not contacts of each other", "JAMES has previously denied a contact request from JOHN"],
    dependencies: ["CONREQ-OK", "CONREQ-DN"],
    steps: [
      {
        description: "As JOHN click Contact Request button to send a request to JAMES",
        data: "#1",
        expected: "Request sent successfully",
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "As JAMES wait for next heartbeat",
        data: "#2",
        expected: "Request recieved",
        actual: null,
        status: null,
        notes: null
      }
    ],
    postConditions: ["JAMES recieved a contact request from JOHN"],
    testData: [
      {
        id: "#1",
        request: 'CCNREQ\n{\n  "seqid": xxxx,\n  "userid": "james"\n}',
        response: 'SRVROK\n{\n  "seqid": xxxx\n}'
      },
      {
        id: "#2",
        request: 'CHBEAT\n{\n  "seqid": yyyy\n}',
        response: 'SRVROK\n{\n  "seqid": yyyy,\n  "contacts": [],\n  "inbox": [],\n  "requests": [\n    {  \n      "senderid": "foobar",\n      "date": "YYYY-MM-DDTHH:mm:ss"\n    }\n  ]\n}'
      }
    ]
  },
  
  "CONREQ-CON": 
  {
    title: "Client Contact Request",
    caseId: "CONREQ-DB2",
    priority: "High",
    moduleName: "Client Can Add Other Clients",
    rfcReferences: ["2.1.3.3", "3.1.5", "4.1.3", "CCNREQ: Client Contact Request"],
    testTitle: "Contact Request",
    description: "User cannot send contact request to a contact",
    target: "Server, Client",
    designed: {
      by: null,
      date: null
    },
    executed: {
      by: null,
      date: null
    },
    preConditions: ["JOHN is logged in", "JAMES is logged in", "JOHN and JAMES are contacts of each other", "JAMES has found JOHN with search"],
    dependencies: ["CONREQ-OK"],
    steps: [
      {
        description: "As JAMES send a contact request to JOHN (or inject if client does not allow)",
        data: "#1",
        expected: "Request is not sent",
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "As JOHN wait for next heartbeat",
        data: "#2",
        expected: "No contact request from JAMES is recieved",
        actual: null,
        status: null,
        notes: null
      }
    ],
    postConditions: ["JOHN did not get a contact request from JAMES"],
    testData: [
      {
        id: "#1",
        request: 'CCNREQ\n{\n  "seqid": xxxx,\n  "userid": "foobar"\n}',
        response: 'SRVERR\n{\n  "seqid": xxxx\n}'
      },
      {
        id: "#2",
        request: 'CHBEAT\n{\n  "seqid": yyyy\n}',
        response: 'SRVROK\n{\n  "seqid": xxxx,\n  "contacts": [\n    {\n      "userid": "foobar",\n      "ip": "",\n      "status": "offline",\n      "profile": {\n        "message": "",\n        "location": "",\n        "gender": "",\n        "nationality": ""\n      }\n    }\n  ],\n  "inbox": [],\n  "requests": []\n}'
      }
    ]
  },
  
  "PROEDT": 
  {
    title: "Client Profile Edit",
    caseId: "CPROFE",
    priority: "Medium",
    moduleName: "Client Update His Profile Information",
    rfcReferences: ["2.1.3.8", "3.1.7", "4.1.5", "CPROFE: Client Profile Edit"],
    testTitle: "Update Profile",
    description: "User updates his profile",
    target: "Server, Client",
    designed: {
      by: null,
      date: null
    },
    executed: {
      by: null,
      date: null
    },
    preConditions: ["JOHN is logged in", "JAMES_B is logged in", "JOHN and JAMES_B are contacts of each other"],
    dependencies: ["CONREQ-OK"],
    steps: [
      {
        description: "As JOHN wait for the next heart beat",
        data: "#1",
        expected: "Recieved JAMES_B's current public profile",
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "As JAMES_B enter status message",
        data: "livin la vida loca",
        expected: null,
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "As JAMES_B enter location",
        data: "the moon",
        expected: null,
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "As JAMES_B select gender from list",
        data: "M",
        expected: null,
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "As JAMES_B enter nationality",
        data: "Turkish",
        expected: null,
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "As JAMES_B Click Update button",
        data: "#2",
        expected: "Profile updated successfully",
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "As JOHN wait for the next heart beat",
        data: "#3",
        expected: "Recieved JAMES_B's updated public profile",
        actual: null,
        status: null,
        notes: null
      }
    ],
    postConditions: ["JAMES_B's public profile is updated"],
    testData: [
      {
        id: "#1",
        request: 'CHBEAT\n{\n  "seqid": xxxx\n}',
        response: 'SRVROK\n{\n  "seqid": xxxx,\n  "contacts": [\n    {\n      "userid": "james",\n      "ip": "bbb.ccc.ddd.eee",\n      "status": "online",\n      "profile": {\n        "message": "",\n        "location": "",\n        "gender": "",\n        "nationality": ""\n      }\n    }\n  ],\n  "inbox": [],\n  "requests": []\n}'
      },
      {
        id: "#2",
        request: 'CPROFE\n{\n  "seqid": yyyy,\n  "profile": {\n    "message": "livin la vida loca",\n    "location": "the moon",\n    "gender": "M",\n    "nationality": "Turkish"\n  }\n}',
        response: 'SRVROK\n{\n  "seqid": yyyy\n}'
      },
      {
        id: "#3",
        request: 'CHBEAT\n{\n  "seqid": zzzz\n}',
        response: 'SRVROK\n{\n  "seqid": zzzz,\n  "contacts": [\n    {\n      "userid": "james",\n      "ip": "bbb.ccc.ddd.eee",\n      "status": "online",\n      "profile": {\n        "message": "livin la vida loca",\n        "location": "the moon",\n        "gender": "M",\n        "nationality": "Turkish"\n      }\n    }\n  ],\n  "inbox": [],\n  "requests": []\n}'
      }
    ]
  },
  
  "HBEAT-ON": 
  {
    title: "Client Heartbeat Check",
    caseId: "HBEAT-ON",
    priority: "High",
    moduleName: "Server Heartbeat Check",
    rfcReferences: ["3.1.4", "3.1.6", "4.1.3", "CHBEAT: Client Heartbeat"],
    testTitle: "Heartbeat from Client",
    description: "Client status updates to online once logged in",
    target: "Server, Client",
    designed: {
      by: null,
      date: null
    },
    executed: {
      by: null,
      date: null
    },
    preConditions: ["JOHN is not logged in", "JAMES is logged in", "JOHN and JAMES are contacts of each other"],
    dependencies: ["CONREQ-OK"],
    steps: [
      {
        description: "As JAMES wait for the next heartbeat",
        data: "#1",
        expected: "JOHN is offline",
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "As JOHN login",
        data: "#2",
        expected: "JOHN is logged in",
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "As JAMES wait for the next heartbeat",
        data: "#3",
        expected: "JOHN is online",
        actual: null,
        status: null,
        notes: null
      }
    ],
    postConditions: ["JOHN is logged in", "JAMES knows that JOHN is online"],
    testData: [
      {
        id: "#1",
        request: 'CHBEAT\n{\n  "seqid": xxxx\n}',
        response: 'SRVROK\n{\n  "seqid": xxxx,\n  "contacts": [\n    {\n      "userid": "foobar",\n      "ip": "",\n      "status": "offline",\n      "profile": {\n        "message": "",\n        "location": "",\n        "gender": "",\n        "nationality": ""\n      }\n    }\n  ],\n  "inbox": [],\n  "requests": []\n}'
      },
      {
        id: "#2",
        request: 'CLOGIN\n{\n  "seqid": yyyy,\n  "userid": "foobar",\n  "password": "foopassword"\n}',
        response: 'SRVROK\n{\n  "seqid": yyyy\n}'
      },
      {
        id: "#3",
        request: 'CHBEAT\n{\n  "seqid": zzzz\n}',
        response: 'SRVROK\n{\n  "seqid": zzzz,\n  "contacts": [\n    {\n      "userid": "foobar",\n      "ip": "aaa.bbb.ccc.ddd",\n      "status": "online",\n      "profile": {\n        "message": "",\n        "location": "",\n        "gender": "",\n        "nationality": ""\n      }\n    }\n  ],\n  "inbox": [],\n  "requests": []\n}'
      }
    ]
  },
  
  "HBEAT-OFF": 
  {
    title: "Client Heartbeat Check",
    caseId: "HBEAT-OFF",
    priority: "High",
    moduleName: "Server Heartbeat Check",
    rfcReferences: ["3.1.4", "3.1.6", "4.1.3", "CHBEAT: Client Heartbeat"],
    testTitle: "Heartbeat from Client",
    description: "Server updates client status to offline once 3 heartbeats are missed",
    target: "Server, Client",
    designed: {
      by: null,
      date: null
    },
    executed: {
      by: null,
      date: null
    },
    preConditions: ["JOHN is logged in", "JAMES is logged in", "JOHN and JAMES are contacts of each other"],
    dependencies: ["CONREQ-OK"],
    steps: [
      {
        description: "As JAMES wait for the next heartbeat",
        data: "#1",
        expected: "JOHN is online",
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "As JOHN close client and wait for 30 seconds",
        data: null,
        expected: "JOHN is logged off",
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "As JAMES wait for the next heartbeat",
        data: "#2",
        expected: "JOHN is offline",
        actual: null,
        status: null,
        notes: null
      }
    ],
    postConditions: ["JOHN is not logged in", "JAMES knows that JOHN is offline"],
    testData: [
      {
        id: "#1",
        request: 'CHBEAT\n{\n  "seqid": xxxx\n}',
        response: 'SRVROK\n{\n  "seqid": xxxx,\n  "contacts": [\n    {\n      "userid": "foobar",\n      "ip": "aaa.bbb.ccc.ddd",\n      "status": "online",\n      "profile": {\n        "message": "",\n        "location": "",\n        "gender": "",\n        "nationality": ""\n      }\n    }\n  ],\n  "inbox": [],\n  "requests": []\n}'
      },
      {
        id: "#2",
        request: 'CHBEAT\n{\n  "seqid": yyyy\n}',
        response: 'SRVROK\n{\n  "seqid": yyyy,\n  "contacts": [\n    {\n      "userid": "foobar",\n      "ip": "",\n      "status": "offline",\n      "profile": {\n        "message": "",\n        "location": "",\n        "gender": "",\n        "nationality": ""\n      }\n    }\n  ],\n  "inbox": [],\n  "requests": []\n}'
      }
    ]
  },
  
  "HBEAT-SKIP": 
  {
    title: "Client Heartbeat Check",
    caseId: "HBEAT-SKIP",
    priority: "High",
    moduleName: "Server Heartbeat Check",
    rfcReferences: ["3.1.4", "3.1.6", "4.1.3", "CHBEAT: Client Heartbeat"],
    testTitle: "Heartbeat from Client",
    description: "Server updates client status to offline if and only if 3 heartbeats are missed in a row",
    target: "Server, Client",
    designed: {
      by: null,
      date: null
    },
    executed: {
      by: null,
      date: null
    },
    preConditions: ["JOHN is logged in", "JAMES is logged in", "JOHN and JAMES are contacts of each other"],
    dependencies: ["CONREQ-OK"],
    steps: [
      {
        description: "As JAMES wait for the next heartbeat",
        data: "#1",
        expected: "JOHN is online",
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "As JOHN close client and wait for 20 seconds, then open it back up",
        data: "#2",
        expected: "JOHN is logged in",
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "As JAMES wait for the next heartbeat",
        data: "#3",
        expected: "JOHN is online",
        actual: null,
        status: null,
        notes: null
      }
    ],
    postConditions: ["JOHN is logged in", "JAMES knows that JOHN is online"],
    testData: [
      {
        id: "#1",
        request: 'CHBEAT\n{\n  "seqid": xxxx\n}',
        response: 'SRVROK\n{\n  "seqid": xxxx,\n  "contacts": [\n    {\n      "userid": "foobar",\n      "ip": "aaa.bbb.ccc.ddd",\n      "status": "online",\n      "profile": {\n        "message": "",\n        "location": "",\n        "gender": "",\n        "nationality": ""\n      }\n    }\n  ],\n  "inbox": [],\n  "requests": []\n}'
      },
      {
        id: "#2",
        request: 'CHBEAT\n{\n  "seqid": yyyy\n}',
        response: 'SRVROK\n{\n  "seqid": yyyy,\n  "contacts": [\n    {\n      "userid": "james",\n      "ip": "aaa.bbb.ccc.ddd",\n      "status": "online",\n      "profile": {\n        "message": "livin la vida loca",\n        "location": "the moon",\n        "gender": "M",\n        "nationality": "Turkish"\n      }\n    }\n  ],\n  "inbox": [],\n  "requests": []\n}\n'
      },
      {
        id: "#3",
        request: 'CHBEAT\n{\n  "seqid": xxxx\n}',
        response: 'SRVROK\n{\n  "seqid": xxxx,\n  "contacts": [\n    {\n      "userid": "foobar",\n      "ip": "aaa.bbb.ccc.ddd",\n      "status": "online",\n      "profile": {\n        "message": "",\n        "location": "",\n        "gender": "",\n        "nationality": ""\n      }\n    }\n  ],\n  "inbox": [],\n  "requests": []\n}'
      }
    ]
  },
  
  "OFFMSG-OK": 
  {
    title: "Client Send Offline Message",
    caseId: "OFFMSG",
    priority: "High",
    moduleName: "Client Send Offline Message",
    rfcReferences: ["2.1.3.7", "4.1.8", "COFFLN: Client Send Offline Message"],
    testTitle: "Offline Message",
    description: "User sends an offline message to a contact",
    target: "Server, Client",
    designed: {
      by: null,
      date: null
    },
    executed: {
      by: null,
      date: null
    },
    preConditions: ["JOHN is logged in", "JAMES is offline", "JOHN and JAMES are contacts of each other"],
    dependencies: ["CONREQ-OK"],
    steps: [
      {
        description: "As JOHN select JAMES from contacts and click Send Offline Message button",
        data: null,
        expected: "A field is available on the client to enter a message",
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "As JOHN enter the message",
        data: "Hey, call me when you get back.",
        expected: null,
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "As JOHN click Send Message button",
        data: "#1",
        expected: "Message successfully sent",
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "As JAMES login and send a heartbeat",
        data: "#2",
        expected: "Offline message from JOHN is recieved",
        actual: null,
        status: null,
        notes: null
      }
    ],
    postConditions: ["JAMES recieved an offline message from JOHN"],
    testData: [
      {
        id: "#1",
        request: 'COFFLN\n{\n  "seqid": xxxx,\n  "recipient": "james",\n  "message": "Hey, call me when you get back."\n}',
        response: 'SRVROK\n{\n  "seqid": xxxx\n}'
      },
      {
        id: "#2",
        request: 'CHBEAT\n{\n  "seqid": yyyy\n}',
        response: 'SRVROK\n{\n  "seqid": yyyy,\n  "contacts": [\n    {\n      "userid": "foobar",\n      "ip": "bbb.ccc.ddd.eee",\n      "status": "online",\n      "profile": {\n        "message": "",\n        "location": "",\n        "gender": "",\n        "nationality": ""\n      }\n    }\n  ],\n  "inbox": [\n    {\n      "senderid": "foobar",\n      "date": "YYYY-MM-DDTHH:mm:ss",\n      "message": "Hey, call me when you get back."\n    }\n  ],\n  "requests": []\n}'
      }
    ]
  },
  
  "OFFMSG-NC": 
  {
    title: "Client Send Offline Message",
    caseId: "OFFMSG",
    priority: "High",
    moduleName: "Client Send Offline Message",
    rfcReferences: ["2.1.3.7", "COFFLN: Client Send Offline Message"],
    testTitle: "Offline Message",
    description: "Injecting an offline message to a non-contact",
    target: "Server",
    designed: {
      by: null,
      date: null
    },
    executed: {
      by: null,
      date: null
    },
    preConditions: ["JOHN is logged in", "MARK is offline", "JOHN and MARK are not contacts of each other"],
    dependencies: ["CONREQ-OK"],
    steps: [
      {
        description: "As JOHN inject an offline message to MARK",
        data: "#1",
        expected: "Server error",
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "As MARK login and send a heartbeat",
        data: "#2",
        expected: "No offline messages",
        actual: null,
        status: null,
        notes: null
      }
    ],
    postConditions: ["JAMES recieved an offline message from JOHN"],
    testData: [
      {
        id: "#1",
        request: 'COFFLN\n{\n  "seqid": xxxx,\n  "recipient": "mark",\n  "message": "Hey, call me when you get back."\n}',
        response: 'SRVERR\n{\n  "seqid": xxxx\n}'
      },
      {
        id: "#2",
        request: 'CHBEAT\n{\n  "seqid": yyyy\n}',
        response: 'SRVROK\n{\n  "seqid": yyyy,\n  "contacts": [],\n  "inbox": [],\n  "requests": []\n}'
      }
    ]
  },
  
  "OFFMSG-NU": 
  {
    title: "Client Send Offline Message",
    caseId: "OFFMSG",
    priority: "High",
    moduleName: "Client Send Offline Message",
    rfcReferences: ["2.1.3.7", "COFFLN: Client Send Offline Message"],
    testTitle: "Offline Message",
    description: "Injecting an offline message to a non-user",
    target: "Server",
    designed: {
      by: null,
      date: null
    },
    executed: {
      by: null,
      date: null
    },
    preConditions: ["JOHN is logged in", "no user with user id \"idontexist\" exists"],
    dependencies: ["CONREQ-OK"],
    steps: [
      {
        description: "As JOHN inject an offline message",
        data: "#1",
        expected: "Server error",
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "As JOHN send a heartbeat",
        data: "#2",
        expected: "Server responded OK",
        actual: null,
        status: null,
        notes: null
      }
    ],
    postConditions: ["Server is operational"],
    testData: [
      {
        id: "#1",
        request: 'COFFLN\n{\n  "seqid": xxxx,\n  "recipient": "idontexist",\n  "message": "Hey, call me when you get back."\n}',
        response: 'SRVERR\n{\n  "seqid": xxxx\n}'
      },
      {
        id: "#2",
        request: 'CHBEAT\n{\n  "seqid": yyyy\n}',
        response: 'SRVROK\n{\n  "seqid": yyyy,\n  "contacts": [\n    {\n      "userid": "james",\n      "ip": "",\n      "status": "offline",\n      "profile": {\n        "message": "livin la vida loca",\n        "location": "the moon",\n        "gender": "M",\n        "nationality": "Turkish"\n      }\n    }\n  ],\n  "inbox": [],\n  "requests": []\n}\n'
      }
    ]
  },
  
  "OFFMSG-ON": 
  {
    title: "Client Send Offline Message",
    caseId: "OFFMSG",
    priority: "High",
    moduleName: "Client Send Offline Message",
    rfcReferences: ["2.1.3.7", "COFFLN: Client Send Offline Message"],
    testTitle: "Offline Message",
    description: "An offline message is injected to an online user",
    target: "Server",
    designed: {
      by: null,
      date: null
    },
    executed: {
      by: null,
      date: null
    },
    preConditions: ["JOHN is logged in", "JAMES is logged in", "JOHN and JAMES are contacts of each other"],
    dependencies: ["CONREQ-OK"],
    steps: [
      {
        description: "As JOHN inject an offline message",
        data: "#1",
        expected: "Message cannot be sent",
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "As JAMES send a heartbeat",
        data: "#2",
        expected: "No offline messages from JOHN",
        actual: null,
        status: null,
        notes: null
      }
    ],
    postConditions: ["JAMES did not recieved an offline message from JOHN"],
    testData: [
      {
        id: "#1",
        request: 'COFFLN\n{\n  "seqid": xxxx,\n  "recipient": "james",\n  "message": "Hey, call me when you get back."\n}',
        response: 'SRVERR\n{\n  "seqid": xxxx\n}'
      },
      {
        id: "#2",
        request: 'CHBEAT\n{\n  "seqid": yyyy\n}',
        response: 'SRVROK\n{\n  "seqid": yyyy,\n  "contacts": [\n    {\n      "userid": "foobar",\n      "ip": "bbb.ccc.ddd.eee",\n      "status": "online",\n      "profile": {\n        "message": "",\n        "location": "",\n        "gender": "",\n        "nationality": ""\n      }\n    }\n  ],\n  "inbox": [],\n  "requests": []\n}'
      }
    ]
  },
  
  "OFFMSG-CONC": 
  {
    title: "Client Send Offline Message",
    caseId: "OFFMSG-CONC",
    priority: "High",
    moduleName: "Client Send Offline Message",
    rfcReferences: ["2.1.3.7", "4.1.8", "COFFLN: Client Send Offline Message"],
    testTitle: "Offline Message",
    description: "An offline message is sent to an online user because of a concurrency problem",
    target: "Client",
    designed: {
      by: null,
      date: null
    },
    executed: {
      by: null,
      date: null
    },
    preConditions: ["JOHN is logged in", "JAMES is offline", "JOHN and JAMES are contacts of each other"],
    dependencies: ["CONREQ-OK"],
    steps: [
      {
        description: "As JOHN select JAMES from contacts and click Send Offline Message button",
        data: null,
        expected: "A field is available on the client to enter a message",
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "As JOHN enter the message",
        data: "Hey, call me when you get back.",
        expected: null,
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "As JAMES login",
        data: null,
        expected: "JAMES is logged in",
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "As JOHN click Send Message button before the next heartbeat",
        data: "#1",
        expected: "Message cannot be sent",
        actual: null,
        status: null,
        notes: null
      }
    ],
    postConditions: ["Client is operational"],
    testData: [
      {
        id: "#1",
        request: 'COFFLN\n{\n  "seqid": xxxx,\n  "recipient": "james",\n  "message": "Hey, call me when you get back."\n}',
        response: 'SRVERR\n{\n  "seqid": xxxx\n}'
      }
    ]
  },
  
  
  /* TODO: clean up the client to client test cases */
  
  "CCCHRQD": 
  {
    title: "Client Chat Request Deny",
    caseId: "CCCHRQD",
    priority: "High",
    moduleName: "Deny chat request from contact",
    testTitle: "Chat request to client",
    description: "Test if clients can deny chat requests",
    designed: {
      by: null,
      date: null
    },
    executed: {
      by: null,
      date: null
    },
    preConditions: ["User is logged in", "Second user is logged in", "Two users are contacts"],
    dependencies: ["Client Contact Request"],
    steps: [
      {
        description: "User tries to send a text message",
        data: "#1",
        expected: "Messaging without an accepted request is not allowed",
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "User sends a chat request",
        data: "#2",
        expected: "Request is sent to the second user",
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "Second user recieves and denies the chat request",
        data: "#3",
        expected: "Response is sent to the first user",
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "First user tries to send a text message",
        data: "#4",
        expected: "Messaging without an accepted request is not allowed",
        actual: null,
        status: null,
        notes: null
      }
    ],
    postConditions: ["Users are not in chat"],
    testData: [
      {
        id: "#1",
        request: 'CCCHAT\n{\n  "seqid": xxxx,\n  "message": "Hey, what\'s up?"\n}',
        response: 'CCLERR\n{\n  "seqid": xxxx,\n  "message": "Chat consent is not given"\n}'
      },
      {
        id: "#2",
        request: 'CCCHRQ\n{\n  "seqid": yyyy,\n  "userid": "foobar"\n}',
        response: 'CCLACK\n{\n  "seqid": yyyy\n}'
      },
      {
        id: "#3",
        request: 'CCCHRS\n{\n  "seqid": zzzz,\n  "response": "deny"\n}',
        response: 'CCLACK\n{\n  "seqid": zzzz\n}'
      },
      {
        id: "#4",
        request: 'CCCHAT\n{\n  "seqid": aaaa,\n  "message": "Hey, what\'s up?"\n}',
        response: 'CCLERR\n{\n  "seqid": aaaa,\n  "message": "Chat consent is not given"\n}'
      }
    ]
  },
  
  "CCCHRQ": 
  {
    title: "Client Chat Request",
    caseId: "CCCHRQ",
    priority: "High",
    moduleName: "Accept chat request from contact",
    testTitle: "Chat request to client",
    description: "Test if clients can accept chat requests and start messaging",
    designed: {
      by: null,
      date: null
    },
    executed: {
      by: null,
      date: null
    },
    preConditions: ["User is logged in", "Second user is logged in", "Two users are contacts"],
    dependencies: ["Client Contact Request"],
    steps: [
      {
        description: "User sends a chat request",
        data: "#1",
        expected: "Request is sent to the second user",
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "Second user recieves and accepts the chat request",
        data: "#2",
        expected: "Response is sent to the first user",
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "First user enters a message",
        data: "How is it going?",
        expected: null,
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "First user tries to send the message",
        data: "#3",
        expected: "Second user recieves the message",
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "Second user enters a message",
        data: "Just testing. How about you?",
        expected: null,
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "Second user tries to send the message",
        data: "#4",
        expected: "First user recieves the message",
        actual: null,
        status: null,
        notes: null
      }
    ],
    postConditions: ["Users are engaged in chat"],
    testData: [
      {
        id: "#1",
        request: 'CCCHRQ\n{\n  "seqid": xxxx,\n  "userid": "foobar"\n}',
        response: 'CCLACK\n{\n  "seqid": xxxx\n}'
      },
      {
        id: "#2",
        request: 'CCCHRS\n{\n  "seqid": yyyy,\n  "response": "accept"\n}',
        response: 'CCLACK\n{\n  "seqid": yyyy\n}'
      },
      {
        id: "#3",
        request: 'CCCHAT\n{\n  "seqid": zzzz,\n  "message": "How is it going?"\n}',
        response: 'CCLACK\n{\n  "seqid": zzzz\n}'
      },
      {
        id: "#4",
        request: 'CCCHAT\n{\n  "seqid": aaaa,\n  "message": "Just testing. How about you?"\n}',
        response: 'CCLACK\n{\n  "seqid": aaaa\n}'
      }
    ]
  },
  
  "CCCHRQR": 
  {
    title: "Client Chat Request Reject",
    caseId: "CCCHRQR",
    priority: "High",
    moduleName: "Reject illegal chat requests",
    testTitle: "Chat request to client",
    description: "Test if clients reject to send or acknowledge illegal chat requests",
    designed: {
      by: null,
      date: null
    },
    executed: {
      by: null,
      date: null
    },
    preConditions: ["User 1 (foobar) is logged in and available", 
      "User 2 is logged in and available", 
      "User 3 is logged in and busy",
      "User 1 and User 2 are not contacts or each other",
      "User 1 and User 3 are contacts of each other"],
    dependencies: ["Client Contact Request"],
    steps: [
      {
        description: "User 1 sends a chat request to User 2 (force Client to do this)",
        data: "#1",
        expected: "Non-contact users cannot send each other chat requests",
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "User 1 sends a chat request to User 3",
        data: "#2",
        expected: "User is not available",
        actual: null,
        status: null,
        notes: null
      }
    ],
    postConditions: ["Users are not engaged in chat"],
    testData: [
      {
        id: "#1",
        request: 'CCCHRQ\n{\n  "seqid": xxxx,\n  "userid": "foobar"\n}',
        response: 'CCLERR\n{\n  "seqid": xxxx,\n  "message": "User not in contact list"\n}'
      },
      {
        id: "#2",
        request: 'CCCHRQ\n{\n  "seqid": yyyy,\n  "userid": "foobar"\n}',
        response: 'CCLERR\n{\n  "seqid": yyyy,\n  "message": "User not available"\n}'
      }
    ]
  },
  
  "CCCHRQB": 
  {
    title: "Client Chat Request Sender Busy",
    caseId: "CCCHRQB",
    priority: "High",
    moduleName: "Prevent illegal chat requests",
    testTitle: "Chat request to client from busy sender",
    description: "Test if clients reject to send or acknowledge illegal chat requests",
    designed: {
      by: null,
      date: null
    },
    executed: {
      by: null,
      date: null
    },
    preConditions: ["User 1 (foobar) is logged in and busy", 
      "User 2 is logged in and available", 
      "User 1 and User 2 are contacts of each other"],
    dependencies: ["Client Contact Request"],
    steps: [
      {
        description: "User 1 sends a chat request to User 2",
        data: null,
        expected: "Cannot send chat request when busy",
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "User 1 sends a chat request to User 2 (force Client to do this)",
        data: "#1",
        expected: "Request acknowledged",
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "User 2 accepts chat request",
        data: "#2",
        expected: "User 1 is not available",
        actual: null,
        status: null,
        notes: null
      }
    ],
    postConditions: ["Users are not engaged in chat"],
    testData: [
      {
        id: "#1",
        request: 'CCCHRQ\n{\n  "seqid": xxxx,\n  "userid": "foobar"\n}',
        response: 'CCLACK\n{\n  "seqid": xxxx\n}'
      },
      {
        id: "#2",
        request: 'CCCHRS\n{\n  "seqid": yyyy,\n  "response": "accept"\n}',
        response: 'CCLERR\n{\n  "seqid": yyyy,\n  "message": "User not available"\n}'
      }
    ]
  },
  
  "CCENDC": 
  {
    title: "Client End Chat",
    caseId: "CCENDC",
    priority: "High",
    moduleName: "Client can end chat with another client",
    testTitle: "End chat between clients",
    description: "Test if clients end chatting and start chatting with other people",
    designed: {
      by: null,
      date: null
    },
    executed: {
      by: null,
      date: null
    },
    preConditions: ["User 1 (foobar) is logged in and busy", 
      "User 2 (foobar2) is logged in and busy", 
      "User 1 and User 2 are chatting with each other"],
    dependencies: ["Client Contact Request"],
    steps: [
      {
        description: "User 1 ends chat",
        data: "#1",
        expected: "Chat is ended and both users are available",
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "User 1 sends a chat request to another contact",
        data: "#2",
        expected: "Request acknowledged",
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "User 2 sends a chat request to another contact",
        data: "#3",
        expected: "Request acknowledged",
        actual: null,
        status: null,
        notes: null
      }
    ],
    postConditions: ["Users are not longer engaged in chat", "Users are engaged in chat with other users"],
    testData: [
      {
        id: "#1",
        request: 'CCENDC\n{\n  "seqid": xxxx\n}',
        response: 'CCLACK\n{\n  "seqid": xxxx\n}'
      },
      {
        id: "#2",
        request: 'CCCHRQ\n{\n  "seqid": yyyy,\n  "userid": "foobar"\n}',
        response: 'CCLACK\n{\n  "seqid": yyyy\n}'
      },
      {
        id: "#3",
        request: 'CCCHRQ\n{\n  "seqid": zzzz,\n  "userid": "foobar2"\n}',
        response: 'CCLACK\n{\n  "seqid": zzzz\n}'
      }
    ]
  },
  
  "CCENDCO": 
  {
    title: "Client End Chat User Offline",
    caseId: "CCENDCO",
    priority: "High",
    moduleName: "Chat ends when one client becomes offline",
    testTitle: "End chat between clients",
    description: "Test if clients end chatting when one client is offline",
    designed: {
      by: null,
      date: null
    },
    executed: {
      by: null,
      date: null
    },
    preConditions: ["User 1 (foobar) is logged in and busy", 
      "User 2 (foobar2) is logged in and busy", 
      "User 1 and User 2 are chatting with each other"],
    dependencies: ["Client Contact Request"],
    steps: [
      {
        description: "User 2 becomes offline for longer than 30 seconds",
        data: null,
        expected: null,
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "User 1 sends a heartbeat",
        data: "#1",
        expected: "User 1 sees User 2 as offline and chat  between clients end",
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "User 1 sends a chat request to another contact",
        data: "#2",
        expected: "Request acknowledged",
        actual: null,
        status: null,
        notes: null
      }
    ],
    postConditions: ["Users are not longer engaged in chat", "User 1 is engaged in chat with another user"],
    testData: [
      {
        id: "#1",
        request: 'CHBEAT\n{\n  "seqid": xxxx\n}',
        response: 'SRVROK\n{\n  "seqid": xxxx,\n  "contacts": [\n    {\n      "userid": "foobar2",\n      "ip": "",\n      "status": "offline",\n      "profile": {\n        "message": "",\n        "location": "",\n        "gender": "",\n        "nationality": ""\n      }\n    }\n  ],\n  "inbox": [],\n  "requests": []\n}'
      },
      {
        id: "#2",
        request: 'CCCHRQ\n{\n  "seqid": yyyy,\n  "userid": "foobar"\n}',
        response: 'CCLACK\n{\n  "seqid": yyyy\n}'
      }
    ]
  },
  
  "CSBADR": 
  {
    title: "Bad Request to Server",
    caseId: "CSBADR",
    priority: "High",
    moduleName: "Server ignores bad requests",
    testTitle: "Send a bad request to server",
    description: "Test if server can ignore bad requests",
    designed: {
      by: null,
      date: null
    },
    executed: {
      by: null,
      date: null
    },
    preConditions: [],
    dependencies: [],
    steps: [
      {
        description: "Send an incorrectly formatted request to server",
        data: "#1",
        expected: "Bad request error",
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "Send an invalid request code to server",
        data: "#2",
        expected: "Bad request error",
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "Send a request with missing information to server",
        data: "#3",
        expected: "Bad request error",
        actual: null,
        status: null,
        notes: null
      }
    ],
    postConditions: ["Server maintains working condition"],
    testData: [
      {
        id: "#1",
        request: 'CHBEAT\n"seqid": xxxx',
        response: 'SRVERR\n{\n  "seqid": -1,\n  "message": "Bad request"\n}'
      },
      {
        id: "#2",
        request: 'CDABRQ\n{\n  "seqid": xxxx\n}',
        response: 'SRVERR\n{\n  "seqid": -1,\n  "message": "Bad request"\n}'
      },
      {
        id: "#3",
        request: 'CCNREQ\n{\n  "seqid": zzzz\n}',
        response: 'SRVERR\n{\n  "seqid": zzzz,\n  "message": "Bad request"\n}'
      }
    ]
  },
  
  "CCBADR": 
  {
    title: "Bad Request to Client",
    caseId: "CCBADR",
    priority: "High",
    moduleName: "Client ignores bad requests",
    testTitle: "Send a bad request to client",
    description: "Test if client can ignore bad requests",
    designed: {
      by: null,
      date: null
    },
    executed: {
      by: null,
      date: null
    },
    preConditions: [],
    dependencies: [],
    steps: [
      {
        description: "Send an incorrectly formatted request to client",
        data: "#1",
        expected: "Bad request error",
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "Send an invalid request code to client",
        data: "#2",
        expected: "Bad request error",
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "Send a request with missing information to client",
        data: "#3",
        expected: "Bad request error",
        actual: null,
        status: null,
        notes: null
      }
    ],
    postConditions: ["Client maintains working condition"],
    testData: [
      {
        id: "#1",
        request: 'CCCHAT\n"seqid": xxxx',
        response: 'CCLERR\n{\n  "seqid": -1,\n  "message": "Bad request"\n}'
      },
      {
        id: "#2",
        request: 'CDABRQ\n{\n  "seqid": yyyy\n}',
        response: 'CCLERR\n{\n  "seqid": -1,\n  "message": "Bad request"\n}'
      },
      {
        id: "#3",
        request: 'CCCHAT\n{\n  "seqid": zzzz\n}',
        response: 'CCLERR\n{\n  "seqid": zzzz,\n  "message": "Bad request"\n}'
      }
    ]
  },
  
  "CLSTRQ": 
  {
    title: "Client Lost Requests",
    caseId: "CLSTRQ",
    priority: "High",
    moduleName: "Lost requests are handled like errors",
    testTitle: "Test Lost Reqeusts for Client",
    description: "Test if client can recover from lost requests",
    designed: {
      by: null,
      date: null
    },
    executed: {
      by: null,
      date: null
    },
    preConditions: [],
    dependencies: [],
    steps: [
      {
        description: "Send a request to a client or a server (make sure no response comes back)",
        data: "#1",
        expected: "No response",
        actual: null,
        status: null,
        notes: null
      },
      {
        description: "Client times out and interprets it as an error",
        data: "#2",
        expected: "Client displays an error message",
        actual: null,
        status: null,
        notes: null
      }
    ],
    postConditions: ["Client maintains working condition"],
    testData: [
      {
        id: "#1",
        request: 'RQCODE\n{\n  "seqid": xxxx,\n  ...\n}',
        response: null
      },
      {
        id: "#2",
        request: null,
        response: 'XXXERR\n{\n  "seqid": xxxx,\n  "message": "No response"\n}'
      }
    ]
  }
};


