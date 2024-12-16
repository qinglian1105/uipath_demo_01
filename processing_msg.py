import json
import pandas as pd

def msg_by_python(inputs):         
    pre_outputs = json.loads(inputs)
    df = pd.DataFrame.from_dict([pre_outputs])
    csv_file = "predict_report.csv"
    df.to_csv(csv_file, index=False)
    inputs_str = "--- 預測結果 ---\n\n Score: {}\n Level: {}\n\n資料已寫入csv檔，請檢查。"
    msg = inputs_str.format(pre_outputs['score'], pre_outputs['level'])
    return msg
