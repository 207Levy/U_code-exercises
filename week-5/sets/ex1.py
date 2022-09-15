import json

input_file = open ('sets/nyc_jobs.json')
jobs = json.load(input_file)


def find_jobs_by_word(word):
    return list(filter(lambda job : (word in job['job_description']), jobs))

def find_agency_by_lo_and_level(location, level):
    # which agencies offers Entry-Level jobs and jobs that are located in Broadway (not neccesarily the same job)
    # this does not mean that an agency needs to have a job in entry level and in Broadway
    entry_level_jobs = set([job["agency"] for job in jobs if job["career_level"] == level])
    not_in_brooklin = set([job["agency"] for job in jobs if location in job["work_location"]])
    result = (entry_level_jobs & not_in_brooklin)
    return result

print(find_agency_by_lo_and_level('Broadway','Entry-Level'))
print(len(find_jobs_by_word("experience"))) # 165:

