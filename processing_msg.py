import json
import pandas as pd

# A simple python function to process data for Message Box 
def msg_by_python(flag, inputs):    
    # Transfer string into dictionary    
    pre_outputs = json.loads(inputs)

    # Write to CSV file    
    if flag in ['Y']:
        df = pd.DataFrame.from_dict([pre_outputs])    
        df.to_csv("predict_report.csv", index=False)
        inputs_str="--- 輸入資料 ---\n {}\n\n--- 預測結果 ---\n {}\n\n\n ●資料已寫入csv檔，請檢查。"    
    else:
        inputs_str="--- 輸入資料 ---\n {}\n\n--- 預測結果 ---\n {}" 

    # Processing the string for Message Box
    demo_inputs = pre_outputs.copy()
    demo_outputs = {"score":demo_inputs['score'], "level": demo_inputs['level']}    
    del demo_inputs['score'] 
    del demo_inputs['level']       
    msg = inputs_str.format(json.dumps(demo_inputs), json.dumps(demo_outputs))  
    return msg