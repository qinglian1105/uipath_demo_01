// A simple js function to get data from web page 
function js_tst_01(element, input_text){

    var say_hi = "Hi, " + input_text + "." + "\n Welcome to Django Simple Admin."; 
    // alert(say_hi);   
    
    // Get data from Form
    var v0 = document.getElementById("annual_inc_bin").value;
    var v1 = document.getElementById("loan_amnt_bin").value;
    var v2 = document.getElementById("int_rate_bin").value;    
    var v3 = document.querySelector('#purpose option:checked').innerHTML;  
    var v4 = document.querySelector('#grade option:checked').value;              
    var v5 = document.querySelector('#home_ownership option:checked').value;              
    var v6 = document.querySelector('#pub_rec_bankruptcies option:checked').value;

    // Get data of the prediction
    var v7 = document.getElementById("scorecard_outputs").innerHTML;
    var res_obj = JSON.parse(v7);

    // Transfer data for return
    var post_data = JSON.stringify({annual_inc_bin: parseInt(v0), 
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