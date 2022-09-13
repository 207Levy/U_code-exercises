class YouTubeLessonManager:
    def __init__(self):
        self.lessons = {}
    
    def save(self, key, value):
        key = key.replace(' ', '-')
        self.lessons[key.lower()] = value
    
    def get(self,input):
        result = []
        input = input.replace(' ', '-')
        for (key,value) in self.lessons.items():
            if input.lower() not in key:
                continue
            elif input.lower() == key or input.lower() in key:
                result.append(value)
            
        if result.__len__() == 0:
            return "Nomatching results..."
        else:
            return result
            



    
    

        

lesson_manager = YouTubeLessonManager()
lesson_manager.save("For-Loops", "https://www.youtube.com/watch?v=OnDr4J2UXSA") 
lesson_manager.save("While-Loops", "https://www.youtube.com/watch?v=6TEGxJXLAWQ")
lesson_manager.save("Functions", "https://www.youtube.com/watch?v=NSbOtYzIQI0")
lesson_manager.save("Dictionaries", "https://www.youtube.com/watch?v=ZEZdys-fHDw")  
###--------------------------------------
print(lesson_manager.get("functions")) # outputs: 'https://www.youtube.com/watch?v=NSbOtYzIQI0' 
print(lesson_manager.get("for loops")) # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA' 