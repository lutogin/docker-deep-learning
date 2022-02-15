from random import randint

min_number: int = int(input('Please enter the min number: '))
max_number: int = int(input('Please enter the max number: '))

if min_number > max_number:
  print('Invalid input - shutting down...')
else:
  rnd_number = randint(min_number, max_number)
  print(rnd_number)
