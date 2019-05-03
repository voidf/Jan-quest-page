import tkinter.filedialog
import os,sys

def choosefile():
	file_dir=tkinter.filedialog.askdirectory()
	if file_dir!='':
		print('选择文件夹：%s' % file_dir)
		return file_dir
	else:
		print('没有选择任何文件')
		sys.exit(1)
def prosondir(d):
	tli=[]
	tarli=[]
	nli=os.listdir(d)
	for i in nli:
		if i.find('.')==-1:

			try:
				tep=os.listdir(d+'/'+i)
				if len(tep)>0:
					tli.append(d+'/'+i)
			except:
				pass

		tarli.append(i)
	return tli,tarli
nowdir=choosefile()

print('\n子文件夹列表：')
proli,b=prosondir(nowdir)
print(b)
if input('\n处理子文件夹？（1/0）')=='1':
	for i in proli:
		tplis,c=prosondir(i)

		if len(c)>0:
			for iiii in c:
				b.append(iiii)
		try:
			if len(tplis)>0:
				for iii in tplis:
					proli.append(iii)
		except:
			pass
print(b)
writeString='['
for i in b:
	writeString+='"'+i+'",'
writeString=writeString[:-1]+"]"
with open('FileList.txt','w',1,'utf-8') as f:
	f.write(writeString)
	# f.write('[')
	# for i in b:
		# f.write('"'+i+'",')
os.system('pause')