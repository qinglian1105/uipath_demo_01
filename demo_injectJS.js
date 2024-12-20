function js_tst_01(element, b){

    var a = "Hi, " + b + "." + "\n Welcome to Django Simple Admin."; 
    // alert(a);   
    
    // Get data from Form
    let v0 = document.getElementById("annual_inc_bin").value;
    let v1 = document.getElementById("loan_amnt_bin").value;
    let v2 = document.getElementById("int_rate_bin").value;    
    let v3 = document.querySelector('#purpose option:checked').value;  
    let v4 = document.querySelector('#grade option:checked').value;              
    let v5 = document.querySelector('#home_ownership option:checked').value;              
    let v6 = document.querySelector('#pub_rec_bankruptcies option:checked').value;

    // Get data of the prediction
    let v7 = document.getElementById("scorecard_outputs").innerHTML;
    let res_obj = JSON.parse(v7);

    // Transfer data for return
    let post_data = JSON.stringify({annual_inc_bin: parseInt(v0), 
                                    loan_amnt_bin: parseInt(v1), 
                                    int_rate_bin: parseFloat(v2), 
                                    purpose: v3, 
                                    grade: v4,
                                    home_ownership: v5,
                                    pub_rec_bankruptcies: v6,
                                    score: parseInt(res_obj.score),
                                    level: res_obj.level});            
    return post_data;

}
