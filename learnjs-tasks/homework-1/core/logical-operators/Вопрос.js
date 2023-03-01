if (-1 || 0) alert( 'first' ); // выполнтися, -1
if (-1 && 0) alert( 'second' ); // не выполнится, 0
if (null || -1 && 1) alert( 'third' ); // выполнится: -1 И 1 даст 1, null ИЛИ 1 даст 1
