import tkinter.filedialog
import os,tkinter

rt=tkinter.Tk()
rt.withdraw()

file_dir=tkinter.filedialog.askopenfilenames(title='请选择bgm目录')
ii=1
for i in file_dir:

	dian=i.rfind('.')
	xie=i.rindex('/')
	replaceString=i[xie+1:dian]

	print('ren "%s" %s'%(i.replace('/','\\'),'%d%s'%(ii,i[dian:])))
	os.system('ren "%s" %s'%(i.replace('/','\\'),'%d%s'%(ii,i[dian:])))

	ii=ii+1

os.system('pause')

