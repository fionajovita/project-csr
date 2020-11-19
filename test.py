import speech_recognition as sr

r = sr.Recognizer()
with sr.Microphone() as source:
    print ('Say Something!')
    audio = r.listen(source)
    print ('Done!')
    
try:
    text = r.recognize_google(audio)
    print (text)
except Exception as e:
    print(r.recogniz)
    print(e)
