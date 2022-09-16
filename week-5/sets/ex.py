import json

def find_jobs_by_word(word):
    return [job for job in jobs if word in job.get("job_description")]


f = open("ny_jobs.json")
jobs = json.load(f)

print(len(find_jobs_by_word("experience"))) # 165




#2:

set_career_level = set([job["agency"] for job in jobs if job["career_level"] == "Entry-Level"])
set_located  = set([job["agency"] for job in jobs if "Broadway" in job["work_location"]])

result = (set_career_level & set_located)
print("broadway", result)

f.close()






