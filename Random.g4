grammar Random;

request: single
  | take
  ;

single: space ;
take: TAKE count=INTEGER FROM space ;

space: INTEGER                                          # limit
  | l=LENCL lower=number COMMA upper=number r=RENCL     # range
  | elem (COMMA elem)+                                  # pick
  ;

number: UNARY? INTEGER ;
elem: ELEM | INTEGER ;

UNARY: '+' | '-' ;

TAKE  : 'take' ;
FROM  : 'from' ;

LENCL: LPAREN | LBRACKET ;
RENCL: RPAREN | RBRACKET ;

LPAREN     	: '(' ;
RPAREN     	: ')' ;
LBRACKET    : '[' ;
RBRACKET    : ']' ;

COMMA : ',' ;
WS: [ \n\t\r]+ -> skip;
INTEGER:       [0-9]+;
ELEM    : ~([ ,\r\n] | ']' | '[' | '(' | ')' | '+' | '-' )+ ;
SP: ' ' ;
