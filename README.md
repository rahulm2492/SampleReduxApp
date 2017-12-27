A sample youtube app using reactRedux



---------- Forwarded message ----------
From: "Niharika Arora" <niharika_arora_2018@cba.isb.edu>
Date: Dec 27, 2017 10:40 AM
Subject: TA code
To: "Shivangi Agarwal" <shivangi_agarwal_2018@cba.isb.edu>
Cc: 

import string;

import sys;



from nltk.tag import pos_tag;

from nltk.tokenize import word_tokenize;

from nltk.stem import WordNetLemmatizer;



lemmatizer = WordNetLemmatizer();



number_dict ={  

   "zero":0,

   "single":1,

   "an":1,

   "one":1,

   "two":2,

   "pair":2,

   "three":3,

   "four":4,

   "five":5,

   "six":6,

   "seven":7,

   "eight":8,

   "nine":9,

   "ten":10,

   "eleven":11,

   "twelve":12,

   "thirteen":13,

   "fourteen":14,

   "fifteen":15,

   "twenty":20,

   "thirty":30,

   "fourty":40,

   "fifty":50,

   "sixty":60,

   "seventy":70,

   "eighty":80,

   "ninety":90,

   "hundred":100,

   "thousand":10000,

   "lakh": 100000

};



operator_dict ={  

   "added":"add",

   "subtracted":"subtract",

   "increased":"add",

   "decreased":"subtract",

   "took":"add",

   "gave":"subtract",

   "found":"add",

   "lost":"subtract",

   "removed":"subtract",

   "spent":"subtract",

   "earned":"add"

};



count1=0;

count2=0;

nameNoun='';

finalNoun1='';

finalNoun2='';

finalOperator='';



print("Enter the problem statement");

statement1= raw_input("Enter 1st line of the problem: ");



for word, pos in pos_tag(word_tokenize(statement1)):

 print(pos, word);

 if pos == 'CD' or word in number_dict:

  count1+=1;

  if word in number_dict:

   finalNumber1= number_dict[word];

  else:

   finalNumber1= word;

 elif pos == 'NNP' or pos == 'PRP':

  nameNoun = word;

 elif pos == 'NNS' or pos == 'NN':

  finalNoun1 = word;

  

if nameNoun == '' or finalNoun1 == '':

 print("Please enter a valid statement!!!");

 sys.exit();

 

statement2 = raw_input("Enter 2nd line of the problem: ");



for word, pos in pos_tag(word_tokenize(statement2)):

 if pos == 'CD' or word in number_dict:

  count2+=1;

  if word in number_dict:

   finalNumber2= number_dict[word];

  else:

   finalNumber2= word;

 elif word in operator_dict:

  finalOperator = operator_dict[word];

 elif pos == 'NNS' or pos == 'NN':

  finalNoun2 = word;

 else:

  finalNoun2 = finalNoun1;



if count1==1 and count2==1:

 if finalOperator == "add":

  finalResult = int(finalNumber1) + int(finalNumber2);

 elif finalOperator == "subtract":

  finalResult = int(finalNumber1) - int(finalNumber2);

 else:

  print("This doesn't make sense to me (verb not found in the dictionary). Please try again!");

  sys.exit();

else:

 print("Invalid entry!!!!! Please try again!");

 sys.exit();

 



question = raw_input("Enter the question: ");

if finalResult >=0 and lemmatizer.lemmatize(finalNoun1) == lemmatizer.lemmatize(finalNoun2):

 print(nameNoun+ " finally has "+ str(finalResult)+" "+finalNoun1+" remaining.");

else:

 print("Final result not a positive integer. Please try again!");







