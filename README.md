# **uipath_demo_01**

## **A simple example of integrating Python With UiPath for web automation**

#### **Ⅰ. 目的** 
研調 RPA (Robotic process automation)，實作UiPath來操作網頁，並在其流程中使用Python處理資料。 

#### **Ⅱ. 主要工具**
UiPath Studio Desktop、Python

#### **Ⅲ. 說明**
在UiPath Studio開啓Process，創建一個Flow chart，其中新增一個Sequence，Sequence加入Python Scope。<br>
Process主要內容：到一個網站( 專案django_demo_01 [詳見](<https://github.com/qinglian1105>)) ，接著輸入帳密登入，左側side menu點選某一選單，在Form填入資料按鍵執行，將結果存成變數，該變數再由Python程式處理後，返回予Message Box顯示，按「確定」後關閉網頁，完成整個Process自動化，詳見檔案Main.xaml。部份頁面及說明如下：<br> 

- UiPath Studio - 建立Process<br>

Sequence中的Activity如下右邊的Outline所示。

![avatar](./README_png/page_uipath.png)

- Process執行 - 操作到最後頁面<br>

UiPath執行至此頁面時(選單-信用評分預測)，填完Form的各變數資料，按「Predict Score」鍵後，將於下方以藍色文字及儀表盤呈現結果，UiPath將擷取藍色文字存成變數，給予Python程式(詳見檔案processing_msg.py)處理後再返回Message Box顯示，按「確定」後關閉網頁以完成整個Process自動化過程，一個簡單例子展現UiPath與Python整合。
![avatar](./README_png/page_results.png)

<br>

---

#### **References**

[1] [RPA教室](<https://www.youtube.com/@RPA-Class>)

[2] [UiPath Inc.](<https://www.uipath.com/>)

[3] [PGi 樺鼎商業資訊 - uipath](<https://www.perform-global.com/product/uipath>)

[4] [UiPath中文教學](<https://www.youtube.com/watch?v=IL4lsZX9LqI&list=PLBHK5akT2cACpRygEIjbpZtLF50bjrdep&index=2>)

[5] [UiPath Documentation](<https://docs.uipath.com/activities/other/latest/developer/python-scope>)