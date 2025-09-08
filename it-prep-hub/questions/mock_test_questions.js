// Mock Test Question Bank
// Structure:
// window.mock_tests = {
//   "it_class11_mastery_1": [ { type, question, options?, correct, explanation? } ],
//   "it_class11_mastery_2": [ ... ],
// }
// Additionally, window.mock_pool can be used as a fallback pool.

(function () {
  if (!window.mock_tests) window.mock_tests = {};

  // Helpers to build questions
  function mcq(q, options, correct, explanation) {
    return { type: 'mcq-single', question: q, options, correct, explanation };
  }
  function tf(q, correct, explanation) {
    return { type: 'true-false', question: q, correct, explanation };
  }
  function fill(q, correct, explanation) {
    return { type: 'fill-blanks', question: q, correct, explanation };
  }
  function match(question, correctMap, columnA, columnB, explanation) {
    return { type: 'match-following', question, correct: correctMap, columnA, columnB, explanation };
  }

  // Chapter 1: Basics of Information Technology
  window.mock_tests['it_class11_mastery_1'] = [
    mcq('Which device is primarily used for long-term data storage?', ['RAM', 'CPU', 'SSD', 'Cache'], 'SSD', 'Solid State Drives are non-volatile storage devices.'),
    mcq('Which of the following is an input device?', ['Monitor', 'Keyboard', 'Printer', 'Speaker'], 'Keyboard'),
    tf('An operating system acts as an interface between user and hardware.', 'True'),
    fill('The brain of the computer is called the _____.', 'CPU'),
    mcq('Which is NOT an application software?', ['MS Word', 'Windows 11', 'Photoshop', 'Chrome'], 'Windows 11'),
    mcq('Which memory is volatile?', ['ROM', 'SSD', 'HDD', 'RAM'], 'RAM'),
    mcq('Binary number system uses how many digits?', ['2', '8', '10', '16'], '2'),
    mcq('Which port is used for network communication?', ['USB', 'HDMI', 'Ethernet', 'VGA'], 'Ethernet'),
    tf('Antivirus is a system software.', 'False', 'Antivirus is utility software, which is a type of application software.'),
    mcq('Which unit represents one billion bytes?', ['KB', 'MB', 'GB', 'TB'], 'GB'),
    mcq('Which expansion card handles visual output?', ['NIC', 'GPU', 'Sound Card', 'Modem'], 'GPU'),
    mcq('Which is an example of open-source OS?', ['Windows', 'macOS', 'Linux', 'ChromeOS'], 'Linux'),
    mcq('The speed of a processor is measured in?', ['Hz', 'Bps', 'DPI', 'PPM'], 'Hz'),
    mcq('Which of the following is NOT a programming language?', ['Python', 'Java', 'HTML', 'C++'], 'HTML', 'HTML is a markup language.'),
    fill('LAN stands for Local _____ Network.', 'Area'),
    tf('ROM can be modified easily by the user.', 'False'),
    mcq('Primary purpose of cache memory is to?', ['Store files', 'Increase I/O speed', 'Speed up CPU access', 'Backup data'], 'Speed up CPU access'),
    mcq('Which device converts digital signals to analog and vice versa?', ['Router', 'Modem', 'Switch', 'Bridge'], 'Modem'),
    mcq('What does URL stand for?', ['Uniform Resource Locator', 'Universal Reference Link', 'Unified Resource List', 'Uniform Reference Locator'], 'Uniform Resource Locator'),
    mcq('Which file system is common on Windows?', ['ext4', 'APFS', 'NTFS', 'HFS+'], 'NTFS'),
    mcq('Which one is NOT an output device?', ['Monitor', 'Projector', 'Plotter', 'Scanner'], 'Scanner'),
    mcq('Firewall is used for?', ['Power backup', 'Data storage', 'Network security', 'Printing'], 'Network security'),
    fill('WWW stands for World Wide _____.', 'Web'),
    tf('SSD has mechanical moving parts.', 'False'),
    mcq('Which connector is reversible?', ['USB-A', 'USB-B', 'USB-C', 'VGA'], 'USB-C'),
    mcq('Which unit is used to measure printer resolution?', ['DPI', 'PPM', 'LPI', 'IPS'], 'DPI')
  ];

  // Chapter 2: Introduction to DBMS
  window.mock_tests['it_class11_mastery_2'] = [
    mcq('DBMS stands for?', ['Database Managing System', 'Database Management System', 'Data Basic Management Suite', 'Data Binary Management System'], 'Database Management System'),
    mcq('Which is NOT a DBMS?', ['MySQL', 'Oracle', 'MongoDB', 'HTML'], 'HTML'),
    tf('Primary key can have duplicate values.', 'False'),
    mcq('Which SQL command is used to extract data?', ['GET', 'SELECT', 'EXTRACT', 'FETCH'], 'SELECT'),
    fill('SQL stands for Structured _____ Language.', 'Query'),
    mcq('Which normal form removes partial dependency?', ['1NF', '2NF', '3NF', 'BCNF'], '2NF'),
    mcq('Which is a NoSQL database?', ['PostgreSQL', 'MongoDB', 'SQLite', 'MariaDB'], 'MongoDB'),
    mcq('Which clause filters rows in SQL?', ['WHERE', 'ORDER BY', 'GROUP BY', 'HAVING'], 'WHERE'),
    mcq('Which key uniquely identifies a row?', ['Foreign key', 'Composite key', 'Primary key', 'Secondary key'], 'Primary key'),
    tf('CRUD stands for Create, Read, Update, Delete.', 'True'),
    mcq('Which JOIN returns only matching rows?', ['LEFT', 'RIGHT', 'FULL', 'INNER'], 'INNER'),
    mcq('In ER model, a relationship is represented by?', ['Ellipse', 'Rectangle', 'Diamond', 'Line'], 'Diamond'),
    mcq('Which command adds a new row?', ['INSERT', 'UPDATE', 'ALTER', 'APPEND'], 'INSERT'),
    mcq('Which ensures referential integrity?', ['Primary key', 'Foreign key', 'Unique key', 'Check'], 'Foreign key'),
    fill('A table in DBMS is also called a _____.', 'Relation'),
    mcq('Which index improves read performance?', ['Hash', 'B-Tree', 'Bitmap', 'All of these'], 'All of these'),
    tf('Normalization may reduce redundancy.', 'True'),
    mcq('Which constraint prevents null values?', ['UNIQUE', 'NOT NULL', 'CHECK', 'DEFAULT'], 'NOT NULL'),
    mcq('Which function counts rows?', ['TOTAL()', 'COUNT()', 'SUM()', 'SIZE()'], 'COUNT()'),
    mcq('Which SQL sorts results?', ['SORT BY', 'ARRANGE BY', 'ORDER BY', 'GROUP BY'], 'ORDER BY'),
    mcq('Transaction property ensuring all-or-nothing?', ['Atomicity', 'Consistency', 'Isolation', 'Durability'], 'Atomicity'),
    tf('Views store data physically.', 'False'),
    mcq('Which removes duplicates in SELECT?', ['UNIQUE', 'ONLY', 'DISTINCT', 'SEPARATE'], 'DISTINCT'),
    fill('A column is also known as a _____.', 'Attribute'),
    mcq('Which statement modifies table structure?', ['ALTER', 'UPDATE', 'CHANGE', 'REVISE'], 'ALTER')
  ];

  // Chapter 3: Impressive Web Designing
  window.mock_tests['it_class11_mastery_3'] = [
    mcq('HTML stands for?', ['Hyperlinks and Text Markup Language', 'HyperText Markup Language', 'Home Tool Markup Language', 'Hyper Transfer Markup Language'], 'HyperText Markup Language'),
    mcq('Which tag is used for the largest heading?', ['<h6>', '<title>', '<heading>', '<h1>'], '<h1>'),
    tf('CSS can be used to control layout of multiple web pages.', 'True'),
    fill('The box model in CSS includes content, padding, border, and _____.', 'margin'),
    mcq('Which is used to make a link?', ['<a>', '<link>', '<href>', '<url>'], '<a>'),
    mcq('Flexbox primary axis is controlled by?', ['justify-content', 'align-items', 'flex-basis', 'order'], 'justify-content'),
    mcq('Which HTTP status code means Not Found?', ['200', '301', '404', '500'], '404'),
    mcq('Which CSS unit is relative to root font-size?', ['em', 'px', 'rem', 'vh'], 'rem'),
    tf('Semantic HTML improves accessibility and SEO.', 'True'),
    mcq('Which tag loads external JS?', ['<javascript>', '<script>', '<js>', '<code>'], '<script>'),
    mcq('Position that removes element from normal flow?', ['static', 'relative', 'absolute', 'inherit'], 'absolute'),
    mcq('Grid container property?', ['grid-template-columns', 'flex-direction', 'float', 'align-content'], 'grid-template-columns'),
    mcq('Which meta tag controls viewport on mobile?', ['meta-charset', 'meta-viewport', 'meta-robots', 'meta-theme'], 'meta-viewport'),
    mcq('Which selector targets id="main"?', ['.main', 'main', '#main', '*main*'], '#main'),
    fill('In CSS, # is used for selecting an element by its _____.', 'id'),
    tf('Inline CSS has lower specificity than external CSS.', 'False'),
    mcq('Which protocol secures HTTP?', ['FTP', 'SSH', 'HTTPS', 'SFTP'], 'HTTPS'),
    mcq('Which tag embeds an image?', ['<pic>', '<img>', '<image>', '<media>'], '<img>'),
    mcq('Which JS method selects first matching element?', ['querySelector', 'querySelectorAll', 'getElements', 'select'], 'querySelector'),
    mcq('Which property rounds corners?', ['outline-radius', 'corner-radius', 'border-radius', 'radius'], 'border-radius'),
    mcq('Which color format supports alpha?', ['hex', 'rgb', 'hsl', 'rgba'], 'rgba'),
    tf('Media queries enable responsive design.', 'True'),
    mcq('Which attribute opens link in new tab?', ['rel', 'href', 'target', 'role'], 'target'),
    fill('The default display of a <div> element is _____.', 'block'),
    mcq('Which unit equals 1% of viewport height?', ['vw', 'vh', 'vmin', 'vmax'], 'vh')
  ];

  // Chapter 4: Cyber Law
  window.mock_tests['it_class11_mastery_4'] = [
    mcq('Which act governs cybercrime in India?', ['IT Act 2000', 'IPC 1860', 'RTI Act 2005', 'Cyber Act 2010'], 'IT Act 2000'),
    mcq('Phishing primarily targets?', ['Hardware', 'Software', 'Human users', 'Routers'], 'Human users'),
    tf('A strong password should include a mix of characters.', 'True'),
    fill('Unauthorized access to computer systems is called _____.', 'Hacking'),
    mcq('Which is NOT a cyber threat?', ['Malware', 'Firewall', 'Ransomware', 'Spyware'], 'Firewall'),
    mcq('Two-factor authentication adds a second layer of?', ['Network', 'Hardware', 'Verification', 'Bandwidth'], 'Verification'),
    mcq('GDPR is a regulation from?', ['USA', 'EU', 'India', 'China'], 'EU'),
    mcq('Encrypting data ensures?', ['Availability', 'Integrity', 'Confidentiality', 'Repudiation'], 'Confidentiality'),
    tf('DoS attack aims to make a service unavailable.', 'True'),
    mcq('Malware that replicates without host file?', ['Virus', 'Worm', 'Trojan', 'Rootkit'], 'Worm'),
    mcq('Legal term for fake identity online?', ['Spoofing', 'Masquerading', 'Forgery', 'Phishing'], 'Masquerading'),
    mcq('Which section deals with hacking offences in IT Act?', ['66', '69', '72', '75'], '66'),
    mcq('Digital signature ensures?', ['Anonymity', 'Non-repudiation', 'Latency', 'Compression'], 'Non-repudiation'),
    mcq('Which is NOT PII?', ['Name', 'Email', 'IP address', 'Operating System'], 'Operating System'),
    fill('______ engineering manipulates people to divulge information.', 'Social'),
    tf('HTTPS protects against eavesdropping.', 'True'),
    mcq('Best practice for public Wi-Fi?', ['Disable firewall', 'Use VPN', 'Share files', 'Use HTTP'], 'Use VPN'),
    mcq('Unauthorized copying of software is called?', ['Piracy', 'Phishing', 'Pharming', 'Spoofing'], 'Piracy'),
    mcq('Strongest authentication is?', ['Something you know', 'Something you have', 'Something you are', 'All equal'], 'Something you are'),
    mcq('Which practice reduces attack surface?', ['Patching', 'Overclocking', 'Port forwarding', 'Rooting'], 'Patching'),
    mcq('What law covers privacy of personal data in India (2023)?', ['PDP Bill', 'DPDP Act', 'IT Rules', 'RTI'], 'DPDP Act'),
    tf('Ransomware encrypts files and demands payment.', 'True'),
    mcq('Which email header field helps detect spoofing?', ['From', 'Subject', 'DKIM-Signature', 'Date'], 'DKIM-Signature'),
    fill('Unauthorized interception of network traffic is called _____.', 'Sniffing'),
    mcq('Which organization sets web security standards like TLS?', ['IETF', 'W3C', 'ISO', 'IEEE'], 'IETF')
  ];

  // Fallback mixed pool (optional)
  window.mock_pool = [
    mcq('CPU stands for?', ['Central Processing Unit', 'Control Process Unit', 'Central Program Unit', 'Compute Processing Unit'], 'Central Processing Unit'),
    tf('HTML is a programming language.', 'False', 'HTML is a markup language.'),
    fill('HTTPS uses TLS/____ for security.', 'SSL')
  ];
})();

