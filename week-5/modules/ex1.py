import calendar

print("2010 - " + str(calendar.isleap(2010)))
print("2020 - " + str(calendar.isleap(2020)))

print(calendar.leapdays(2020, 2081))


print(list(calendar.day_abbr)[calendar.weekday(year=2028, month=3, day=14)])