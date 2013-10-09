/**
 * @fileoverview About this file
 */

var simple_result_data = [
  {'testResults': [
    {'name': 'crud', 'start': 1381296247849, 'suites': [
      {'name': 'Put', 'description': 'Put', 'start': 1381296248676, 'specs': [
        {'description': 'single data', 'duration': 742, 'passed': true, 'passedCount': 1, 'failedCount': 0, 'totalCount': 1},
        {'description': 'inline-key autoincrement', 'duration': 174, 'passed': true, 'passedCount': 2, 'failedCount': 0, 'totalCount': 2},
        {'description': 'data with off-line-key', 'duration': 228, 'passed': true, 'passedCount': 2, 'failedCount': 0, 'totalCount': 2},
        {'description': 'offline-key autoincrement', 'duration': 50, 'passed': true, 'passedCount': 2, 'failedCount': 0, 'totalCount': 2},
        {'description': 'nested key', 'duration': 194, 'passed': true, 'passedCount': 1, 'failedCount': 0, 'totalCount': 1},
        {'description': 'single data - array index key', 'duration': 41, 'passed': true, 'passedCount': 2, 'failedCount': 0, 'totalCount': 2},
        {'description': 'array put with ConstraintError', 'duration': 212, 'passed': true, 'passedCount': 3, 'failedCount': 0, 'totalCount': 3}
      ], 'end': 1381296249579},
      {'name': 'Clear', 'description': 'Clear', 'start': 1381296249827, 'specs': [
        {'description': 'by store', 'duration': 247, 'passed': true, 'passedCount': 3, 'failedCount': 0, 'totalCount': 3},
        {'description': 'by database', 'duration': 77, 'passed': true, 'passedCount': 3, 'failedCount': 0, 'totalCount': 3}
      ], 'end': 1381296249904},
      {'name': 'Remove', 'description': 'Remove', 'start': 1381296250122, 'specs': [
        {'description': 'by id', 'duration': 217, 'passed': true, 'passedCount': 3, 'failedCount': 0, 'totalCount': 3},
        {'description': 'by key range', 'duration': 274, 'passed': true, 'passedCount': 3, 'failedCount': 0, 'totalCount': 3}
      ], 'end': 1381296250396},
      {'name': 'Get', 'description': 'Get', 'start': 1381296250415, 'specs': [
        {'description': 'inline-key number', 'duration': 19, 'passed': true, 'passedCount': 1, 'failedCount': 0, 'totalCount': 1},
        {'description': 'inline-line string key', 'duration': 23, 'passed': true, 'passedCount': 1, 'failedCount': 0, 'totalCount': 1},
        {'description': 'out-off-line number key', 'duration': 19, 'passed': true, 'passedCount': 1, 'failedCount': 0, 'totalCount': 1},
        {'description': 'out-off-line string key', 'duration': 30, 'passed': true, 'passedCount': 1, 'failedCount': 0, 'totalCount': 1}
      ], 'end': 1381296250488},
      {'name': 'Values', 'description': 'Values', 'start': 1381296250533, 'specs': [
        {'description': 'Retrieve all objects from a store - inline key', 'duration': 44, 'passed': true, 'passedCount': 7, 'failedCount': 0, 'totalCount': 7},
        {'description': 'Retrieve objects by index key', 'duration': 39, 'passed': true, 'passedCount': 5, 'failedCount': 0, 'totalCount': 5},
        {'description': 'Retrieve objects by key list - inline-key', 'duration': 26, 'passed': true, 'passedCount': 3, 'failedCount': 0, 'totalCount': 3},
        {'description': 'Retrieve objects from a store - out-of-line key', 'duration': 37, 'passed': true, 'passedCount': 4, 'failedCount': 0, 'totalCount': 4},
        {'description': 'Retrieve objects by keys from multiple stores', 'duration': 20, 'passed': true, 'passedCount': 3, 'failedCount': 0, 'totalCount': 3},
        {'description': 'Retrieve objects by multiEntry key', 'duration': 70, 'passed': true, 'passedCount': 1, 'failedCount': 0, 'totalCount': 1}
      ], 'end': 1381296250729},
      {'name': 'Keys', 'description': 'Keys', 'start': 1381296250756, 'specs': [
        {'description': 'from a store', 'duration': 27, 'passed': true, 'passedCount': 3, 'failedCount': 0, 'totalCount': 3},
        {'description': 'Retrieve primary key by index key', 'duration': 27, 'passed': true, 'passedCount': 2, 'failedCount': 0, 'totalCount': 2}
      ], 'end': 1381296250783},
      {'name': 'Count', 'description': 'Count', 'start': 1381296250825, 'specs': [
        {'description': 'all records in a store', 'duration': 42, 'passed': true, 'passedCount': 1, 'failedCount': 0, 'totalCount': 1},
        {'description': 'all records in a out-of-line store', 'duration': 19, 'passed': true, 'passedCount': 1, 'failedCount': 0, 'totalCount': 1},
        {'description': 'all records in stores', 'duration': 25, 'passed': true, 'passedCount': 2, 'failedCount': 0, 'totalCount': 2},
        {'description': 'in a key range', 'duration': 19, 'passed': true, 'passedCount': 1, 'failedCount': 0, 'totalCount': 1}
      ], 'end': 1381296250890}
    ]},
    {'name': 'workflow', 'start': 1381296261769, 'suites': [
      {'name': 'Storage Event', 'description': 'Storage Event', 'start': 1381296261989, 'specs': [
        {'description': 'connected to a new database and existing', 'duration': 132, 'passed': true, 'passedCount': 12, 'failedCount': 0, 'totalCount': 12}
      ], 'end': 1381296261989},
      {'name': 'RecordEvent Event', 'description': 'RecordEvent Event', 'start': 1381296262036, 'specs': [
        {'description': 'created', 'duration': 47, 'passed': true, 'passedCount': 6, 'failedCount': 0, 'totalCount': 6},
        {'description': 'updated', 'duration': 49, 'passed': true, 'passedCount': 10, 'failedCount': 0, 'totalCount': 10}
      ], 'end': 1381296262085},
      {'name': 'Store Event', 'description': 'Store Event', 'start': 1381296262126, 'specs': [
        {'description': 'created', 'duration': 40, 'passed': true, 'passedCount': 5, 'failedCount': 0, 'totalCount': 5},
        {'description': 'updated', 'duration': 51, 'passed': true, 'passedCount': 10, 'failedCount': 0, 'totalCount': 10}
      ], 'end': 1381296262178},
      {'name': 'Run in transaction', 'description': 'Run in transaction', 'start': 1381296262227, 'specs': [
        {'description': 'all requests in one transaction', 'duration': 48, 'passed': true, 'passedCount': 4, 'failedCount': 0, 'totalCount': 4}
      ], 'end': 1381296262227},
      {'name': 'Abort', 'description': 'Abort', 'start': 1381296262307, 'specs': [
        {'description': 'abort a put operation request method', 'duration': 79, 'passed': true, 'passedCount': 7, 'failedCount': 0, 'totalCount': 7},
        {'description': 'abort in run', 'duration': 75, 'passed': true, 'passedCount': 4, 'failedCount': 0, 'totalCount': 4}
      ], 'end': 1381296262383},
      {'name': 'Error', 'description': 'Error', 'start': 1381296262416, 'specs': [
        {'description': 'ConstraintError on adding existing key', 'duration': 32, 'passed': true, 'passedCount': 2, 'failedCount': 0, 'totalCount': 2}
      ], 'end': 1381296262416}
    ]},
    {'name': 'iterator', 'start': 1381296270197, 'suites': [
      {'name': 'Count', 'description': 'Count', 'start': 1381296270489, 'specs': [
        {'description': '1. primary key', 'duration': 175, 'passed': true, 'passedCount': 5, 'failedCount': 0, 'totalCount': 5},
        {'description': '2. by index iterator', 'duration': 28, 'passed': true, 'passedCount': 2, 'failedCount': 0, 'totalCount': 2}
      ], 'end': 1381296270518},
      {'name': 'Get', 'description': 'Get', 'start': 1381296270552, 'specs': [
        {'description': 'effective key by an iterator', 'duration': 33, 'passed': true, 'passedCount': 1, 'failedCount': 0, 'totalCount': 1},
        {'description': 'ref value by an iterator', 'duration': 46, 'passed': true, 'passedCount': 1, 'failedCount': 0, 'totalCount': 1},
        {'description': 'effective key by an index iterator', 'duration': 43, 'passed': true, 'passedCount': 1, 'failedCount': 0, 'totalCount': 1},
        {'description': 'ref value by an iterator', 'duration': 42, 'passed': true, 'passedCount': 1, 'failedCount': 0, 'totalCount': 1}
      ], 'end': 1381296270685},
      {'name': 'values', 'description': 'values', 'start': 1381296270745, 'specs': [
        {'description': '1. Ref value by primary key range', 'duration': 60, 'passed': true, 'passedCount': 9, 'failedCount': 0, 'totalCount': 9},
        {'description': '2. Ref value by index key range', 'duration': 48, 'passed': true, 'passedCount': 5, 'failedCount': 0, 'totalCount': 5},
        {'description': '3. Ref value by index key range', 'duration': 72, 'passed': true, 'passedCount': 6, 'failedCount': 0, 'totalCount': 6},
        {'description': '4. Ref value by string index key range', 'duration': 26, 'passed': true, 'passedCount': 4, 'failedCount': 0, 'totalCount': 4},
        {'description': '5. multiEntry IndexIterator', 'duration': 45, 'passed': true, 'passedCount': 4, 'failedCount': 0, 'totalCount': 4}
      ], 'end': 1381296270940},
      {'name': 'keys', 'description': 'keys', 'start': 1381296270992, 'specs': [
        {'description': '1. Effective key by by primary key range', 'duration': 51, 'passed': true, 'passedCount': 8, 'failedCount': 0, 'totalCount': 8},
        {'description': '2. Effective key by index key range', 'duration': 42, 'passed': true, 'passedCount': 5, 'failedCount': 0, 'totalCount': 5},
        {'description': '3. Effective key by multiEntry index key range', 'duration': 46, 'passed': true, 'passedCount': 6, 'failedCount': 0, 'totalCount': 6}
      ], 'end': 1381296271081}
    ]}
  ], 'library': 'ydn-db', 'date': '2013-10-09T05:24:31.083Z',
    'userAgent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:24.0) Gecko/20100101 Firefox/24.0',
    'platform': 'MacIntel',
    'platformVersion': '10.8',
    'browser': 'Firefox',
    'browserVersion': '24.0',
    'version': '24',
    'mobile': false},
  {'testResults': [
    {
      'name': 'workflow',
      'start': 1381284801549,
      'suites': [
        {'name': 'Storage Event', 'description': 'Storage Event', 'start': 1381284801779, 'specs': [
          {'description': 'connected to a new database and existing', 'duration': 117, 'passed': true, 'passedCount': 12, 'failedCount': 0, 'totalCount': 12}
        ], 'end': 1381284801779},
        {'name': 'RecordEvent Event', 'description': 'RecordEvent Event', 'start': 1381284801849, 'specs': [
          {'description': 'created', 'duration': 68, 'passed': true, 'passedCount': 6, 'failedCount': 0, 'totalCount': 6},
          {'description': 'updated', 'duration': 98, 'passed': true, 'passedCount': 10, 'failedCount': 0, 'totalCount': 10}
        ], 'end': 1381284801949},
        {'name': 'Store Event', 'description': 'Store Event', 'start': 1381284803964, 'specs': [
          {'description': 'created', 'duration': 2014, 'passed': false, 'passedCount': 0, 'failedCount': 3, 'totalCount': 3},
          {'description': 'updated', 'duration': 68, 'passed': true, 'passedCount': 10, 'failedCount': 0, 'totalCount': 10}
        ], 'end': 1381284804033},
        {'name': 'Run in transaction', 'description': 'Run in transaction', 'start': 1381284804093, 'specs': [
          {'description': 'all requests in one transaction', 'duration': 59, 'passed': true, 'passedCount': 4, 'failedCount': 0, 'totalCount': 4}
        ], 'end': 1381284804093},
        {'name': 'Abort', 'description': 'Abort', 'start': 1381284804152, 'specs': [
          {'description': 'abort a put operation request method', 'duration': 58, 'passed': true, 'passedCount': 7, 'failedCount': 0, 'totalCount': 7},
          {'description': 'abort in run', 'duration': 64, 'passed': true, 'passedCount': 4, 'failedCount': 0, 'totalCount': 4}
        ], 'end': 1381284804216},
        {'name': 'Error', 'description': 'Error', 'start': 1381284804242, 'specs': [
          {'description': 'ConstraintError on adding existing key', 'duration': 26, 'passed': false, 'passedCount': 1, 'failedCount': 1, 'totalCount': 2}
        ], 'end': 1381284804243}
      ]}
  ],
    'library': 'ydn-db',
    'date': '2013-10-09T02:13:24.245Z',
    'userAgent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/536.30.1 (KHTML, like Gecko) Version/6.0.5 Safari/536.30.1',
    'platform': 'MacIntel',
    'platformVersion': '10.8.5',
    'browser': 'Safari',
    'browserVersion': '536.30.1',
    'version': '536',
    'mobile': false}
];