import json
import pandas as pd


# A simple python function to process data and write into a CSV file 
def msg_by_python(inputs):
    # Write into a CSV file
    pre_outputs = json.loads(inputs)
    df = pd.DataFrame.from_dict([pre_outputs])    
    df.to_csv("predict_report.csv", index=False)
    # Processing the string for Message Box
    demo_inputs = pre_outputs.copy()
    demo_outputs = {"score": demo_inputs['score'], 
                    "level": demo_inputs['level']}    
    del demo_inputs['score'] 
    del demo_inputs['level']    
    inputs_str="--- 輸入資料 ---\n {}\n\n--- 預測結果 ---\n {}\n\n\n ●資料已寫入csv檔，請檢查。"    
    msg = inputs_str.format(json.dumps(demo_inputs), json.dumps(demo_outputs))  
    return msg
