import os
import tkinter
import tkinter.filedialog
#<script type="text/javascript" src="../global.js"></script>
def TXRP(na,fromObj,toObj,s=1):
	with open(na,"r",encoding="utf-8") as f:
		textContain=f.read()
	with open(na,"w",encoding="utf-8") as f:
		textContain=textContain.replace(fromObj,toObj)
		f.write(textContain)
		
		
def choosefile():
	file_dir=tkinter.filedialog.askopenfilenames(title='请选择需要内容替换的文件')
	if file_dir!='':
		#print('选择文件：%s' % file_dir)
		return file_dir
	else:
		print('没有选择任何文件')
		exit(1)
		
def entry1():
	global fromObj
	fromObj=ent.get('1.0',tkinter.END)[:-1]
	rt.destroy()
	global rt2
	rt2=tkinter.Tk()
	rt2.geometry('500x850')
	rt2.title('键入欲替换文件内容')
	global ent2
	ent2=tkinter.Text(rt2,width=75,height=60)
	ent2.pack()
	bt2=tkinter.Button(rt2,text='确定',width=15,height=2,command=entry2).pack(side='left')
	rt2.mainloop()
	
def entry2():
	global toObj
	toObj=ent2.get('1.0',tkinter.END)[:-1]
	rt2.destroy()
	filepath=choosefile()
	for i in filepath:
		TXRP(i,fromObj,toObj)
		print('processing ',i)
	os.system("pause")
	exit(1)
fromObj=''
toObj=''
rt=tkinter.Tk()
rt.geometry('500x850')
rt.title('键入欲查找文件内容')
ent=tkinter.Text(rt,width=75,height=60)
ent.pack()
bt=tkinter.Button(rt,text='确定',width=15,height=2,command=entry1).pack(side='left')
rt.mainloop()
