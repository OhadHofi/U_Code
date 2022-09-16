class YouTubeLessonManager:
    def __init__(self):
        self.lessons = {}

    def save(self, name, url):
        self.lessons[name.lower().replace("-", " ")] = url
    
    def get(self, name):
        name = name.lower().replace("-", " ")
        res = []
        for lesson_name in self.lessons.keys():
            if name in lesson_name:
                res.append(self.lessons[lesson_name])

        return res


lesson_manager = YouTubeLessonManager()
lesson_manager.save("For-Loops", "https://www.youtube.com/watch?v=OnDr4J2UXSA")
print(lesson_manager.lessons) # outputs: {"For-Loops": "https://www.youtube.com/watch?v=OnDr4J2UXSA"}  
print(lesson_manager.get("For-Loops")) # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA' 
print(lesson_manager.get("for-loops")) # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA'
print(lesson_manager.get("fOr-LooPS")) # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA'

print(lesson_manager.get("for-loops")) # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA' 
print(lesson_manager.get("for loops")) # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA'

print(lesson_manager.get("for loops")) # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA'
print(lesson_manager.get("for")) # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA'
lesson_manager.save("sd-Loops", "https://www.youtube.com/watch?v=6TEGxJXLAWQ")
print(lesson_manager.get("loops")) # outputs ['https://www.youtube.com/watch?v=OnDr4J2UXSA', 'https://www.youtube.com/watch?v=6TEGxJXLAWQ']