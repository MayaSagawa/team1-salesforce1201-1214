function check(){

	var flag = 0;


	// 設定開始（必須にする項目を設定してください）

	if(document.form1.company.value == ""){ // 「貴社名」の入力をチェック

		flag = 1;

	}
	else if(document.form1.phone.value == ""){ // 「電話」の入力をチェック

		flag = 1;

	}
　　 else if(document.form1.last_name.value == ""){ // 「担当者様（姓）」の入力をチェック

		flag = 1;

	}
    else if(document.form1.first_name.value == ""){ // 「担当者様（名）」の入力をチェック

		flag = 1;

	}
    else if(document.form1.email.value == ""){ // 「担当者様 メールアドレス」の入力をチェック

		flag = 1;

	}
    
    if (document .getElementById("00N4x000005CRQ9")  == "" ){ // コメントが未入力の場合
        flag = 1;    document . getElementById("00N4x000005CRQ9") . style . display = "block"; // 【コメントを入力して下さい】を表示
    }else{ // コメントが入力済みの場合
        document . getElementById("00N4x000005CRQ9"). style . display = "none"; // 【コメントを入力して下さい】を非表示
	// 設定終了

	if(flag){

		window.alert('必須項目に未入力がありました'); // 入力漏れがあれば警告ダイアログを表示
		return false; // 送信を中止

	}
	else{

		return true; // 送信を実行

	}

}}