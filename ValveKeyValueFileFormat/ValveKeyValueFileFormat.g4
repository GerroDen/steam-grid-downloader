grammar ValveKeyValueFileFormat;

valveKeyValueFileFormat
    : pair
    ;

pair
    : key value
    ;

key
    : STRING
    ;

value
    : STRING
    | object
    ;

object
    : '{' pair+ '}'
    ;

STRING
    : '"' (ESCAPED_QUOTE | ~('\n'|'\r'))*? '"'
    ;

fragment ESCAPED_QUOTE 
    : '\\"'
    ;

WS 
    : [ \t\r\n]+ -> skip 
    ;
