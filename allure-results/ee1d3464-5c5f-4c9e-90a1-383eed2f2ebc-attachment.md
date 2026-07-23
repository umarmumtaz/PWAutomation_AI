# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: applyJobFlow.spec.ts >> Apply for job flow with register e2e >> @smoke Apply for job flow
- Location: tests\applyJobFlow.spec.ts:7:7

# Error details

```
Test timeout of 300000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 300000ms exceeded.
Call log:
  - waiting for locator('#ui-datepicker-div') to be visible

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - dialog "cookieconsent" [ref=e2]:
    - generic [ref=e3]:
      - text: By clicking "Allow Cookies", you agree to the storing of cookies on your device to analyse site usage, and assist in our marketing efforts.
      - button "Cookie Policy" [ref=e4] [cursor=pointer]
    - generic [ref=e5]:
      - button "Decline Cookies" [ref=e6] [cursor=pointer]: Decline
      - button "allow cookies" [ref=e7] [cursor=pointer]: Allow cookies
  - main [ref=e9]:
    - navigation [ref=e10]:
      - link "GO BACK (MY JOBS)" [ref=e11] [cursor=pointer]:
        - /url: /voyagecare/MyJobs
        - generic [ref=e12]: arrow_back
        - generic [ref=e13]: GO BACK (My Jobs)
      - link "CLOSE TO (MY JOBS)" [ref=e14] [cursor=pointer]:
        - /url: /voyagecare/MyJobs
        - generic [ref=e15]: Close
        - generic [ref=e16]: close
    - generic [ref=e17]:
      - img "New Client logo" [ref=e19]
      - list [ref=e21]:
        - listitem [ref=e22]:
          - link "About You" [ref=e23] [cursor=pointer]:
            - /url: /voyagecare/Application/Application?JobId=535&section=1
            - generic [ref=e24]: About You
        - listitem [ref=e25]:
          - link "Supporting information" [ref=e26] [cursor=pointer]:
            - /url: /voyagecare/Application/SupportingInformation?JobId=535&section=4
            - generic [ref=e27]: Supporting information
        - listitem [ref=e28]:
          - link "Equal opportunities" [ref=e29] [cursor=pointer]:
            - /url: /voyagecare/Application/Application?JobId=535&section=5
            - generic [ref=e30]: Equal opportunities
        - listitem [ref=e31]:
          - link "Review and submit" [ref=e32] [cursor=pointer]:
            - /url: /voyagecare/Application/Application?JobId=535&section=9
            - generic [ref=e33]: Review and submit
      - generic [ref=e34]:
        - generic [ref=e36]: You are applying for the role Manual tester
        - generic [ref=e38]:
          - generic [ref=e39]:
            - heading "A little bit about you check_circle" [level=3] [ref=e40]
            - paragraph
            - generic [ref=e42]:
              - generic [ref=e43]: Title*
              - text: Select one option
              - generic [ref=e44]:
                - combobox "Title*" [ref=e45]:
                  - option "Dr"
                  - option "Miss"
                  - option "Mr"
                  - option "Mrs"
                  - option "Ms"
                  - option "Other"
                  - option "Prof"
                - generic: arrow_drop_down
                - generic [ref=e46]: Answer required
            - generic [ref=e49]:
              - generic [ref=e50]: Last Name*
              - textbox "Last Name* First Name* Middle Name Current Address* Address line 2 City/Town* County* Postcode/Zip Code* Telephone Mobile Telephone* Telephone City/Town* County* Current Employer Job Title Department Employer* Industry* Address* Address line 2 City* County* Post Code* Contact Person* Email Address Phone Fax Salary Notice Period Reason for Leaving" [ref=e51]:
                - /placeholder: Last Name
                - text: Walker
            - generic [ref=e54]:
              - generic [ref=e55]: First Name*
              - textbox "First Name" [ref=e56]: Paul
            - generic [ref=e59]:
              - generic [ref=e60]: Middle Name
              - textbox "Middle Name" [ref=e61]
            - generic [ref=e64]:
              - generic [ref=e65]: Current Address*
              - textbox "Current Address" [ref=e66]
              - generic [ref=e67]: Answer required
            - generic [ref=e70]:
              - generic [ref=e71]: Address line 2
              - textbox "Address line 2" [ref=e72]
            - generic [ref=e75]:
              - generic [ref=e76]: City/Town*
              - textbox "City/Town" [ref=e77]
              - generic [ref=e78]: Answer required
            - generic [ref=e81]:
              - generic [ref=e82]: County*
              - textbox "County" [ref=e83]
              - generic [ref=e84]: Answer required
            - generic [ref=e87]:
              - generic [ref=e88]: Postcode/Zip Code*
              - textbox "Postcode/Zip Code" [ref=e89]
              - generic [ref=e90]: Answer required
            - generic [ref=e93]:
              - generic [ref=e94]: Telephone
              - textbox "Telephone" [ref=e95]
            - generic [ref=e96]:
              - generic [ref=e97]: Candidate Primary Email*
              - textbox "Candidate Primary Email" [ref=e98]: ct51jturop@gmail.com
            - generic [ref=e101]:
              - generic [ref=e102]: Mobile Telephone*
              - textbox "Mobile Telephone" [ref=e103]: "00441172345678"
            - generic [ref=e106]:
              - generic [ref=e107]: Telephone
              - textbox "Telephone" [ref=e108]
            - generic [ref=e110]:
              - generic [ref=e111]: Are you willing to relocate?*
              - text: Select one option
              - generic [ref=e112]:
                - combobox "Are you willing to relocate?*" [ref=e113]:
                  - option "Yes"
                  - option "No"
                - generic: arrow_drop_down
                - generic [ref=e114]: Answer required
            - generic [ref=e117]:
              - generic [ref=e118]: City/Town*
              - textbox "City/Town" [ref=e119]
              - generic [ref=e120]: Answer required
            - generic [ref=e123]:
              - generic [ref=e124]: County*
              - textbox "County" [ref=e125]
              - generic [ref=e126]: Answer required
            - generic [ref=e129]:
              - generic [ref=e130]: Current Employer
              - textbox "Current Employer" [ref=e131]
            - generic [ref=e134]:
              - generic [ref=e135]: Job Title
              - textbox "Job Title" [ref=e136]
            - generic [ref=e139]:
              - generic [ref=e140]: Department
              - textbox "Department" [ref=e141]
            - generic [ref=e143]:
              - generic [ref=e144]: Base Salary
              - text: Select one option
              - generic [ref=e145]:
                - combobox "Base Salary" [ref=e146]:
                  - option "£0-£10,000"
                  - option "£10,001-£20,000"
                  - option "£100,000 +-"
                  - option "£123,456-£789,123"
                  - option "£20,001-£30,000"
                  - option "£30,001-£40,000"
                  - option "£40,001-£50,000"
                  - option "£50,001-£60,000"
                  - option "£60,001-£70,000"
                  - option "£70,001-£80,000"
                  - option "£80,001-£90,000"
                  - option "£90,001-£100,000"
                  - option "Unspecified-"
                - generic: arrow_drop_down
            - generic [ref=e148]:
              - generic [ref=e149]: Current Salary
              - text: Select one option
              - generic [ref=e150]:
                - combobox "Current Salary" [ref=e151]:
                  - option "£0-£10,000"
                  - option "£10,001-£20,000"
                  - option "£100,000 +-"
                  - option "£123,456-£789,123"
                  - option "£20,001-£30,000"
                  - option "£30,001-£40,000"
                  - option "£40,001-£50,000"
                  - option "£50,001-£60,000"
                  - option "£60,001-£70,000"
                  - option "£70,001-£80,000"
                  - option "£80,001-£90,000"
                  - option "£90,001-£100,000"
                  - option "Unspecified-"
                - generic: arrow_drop_down
            - generic [ref=e153]:
              - generic [ref=e154]: Desired Salary
              - text: Select one option
              - generic [ref=e155]:
                - combobox "Desired Salary" [ref=e156]:
                  - option "£0-£10,000"
                  - option "£10,001-£20,000"
                  - option "£100,000 +-"
                  - option "£123,456-£789,123"
                  - option "£20,001-£30,000"
                  - option "£30,001-£40,000"
                  - option "£40,001-£50,000"
                  - option "£50,001-£60,000"
                  - option "£60,001-£70,000"
                  - option "£70,001-£80,000"
                  - option "£80,001-£90,000"
                  - option "£90,001-£100,000"
                  - option "Unspecified-"
                - generic: arrow_drop_down
            - generic [ref=e158]:
              - generic [ref=e159]: Desired Region
              - text: Select all that apply
              - generic [ref=e160]:
                - listbox "Desired Region" [ref=e161]:
                  - option "aPOSTRegion1" [ref=e162]
                  - option "london" [ref=e163]
                  - option "uk" [ref=e164]
                - combobox [ref=e167]:
                  - list [ref=e168]:
                    - listitem [ref=e169]:
                      - searchbox "Desired Region Select all that apply aPOSTRegion1" [ref=e170]
            - generic [ref=e172]:
              - generic [ref=e173]: Desired Category
              - text: Select all that apply
              - generic [ref=e174]:
                - listbox "Desired Category" [ref=e175]:
                  - option "aPOSTJobCategory1" [ref=e176]
                  - option "Care Management" [ref=e177]
                  - option "Fee Procurement" [ref=e178]
                  - option "Group Support Managerial" [ref=e179]
                  - option "Internal Communications" [ref=e180]
                  - option "IT" [ref=e181]
                  - option "Nurses" [ref=e182]
                  - option "Operations Manager" [ref=e183]
                  - option "Procurement" [ref=e184]
                  - option "Property" [ref=e185]
                  - option "Service Optimisation" [ref=e186]
                  - option "Supervisors" [ref=e187]
                  - option "Support Staff - Service" [ref=e188]
                  - option "Support Worker" [ref=e189]
                  - option "Team Leader" [ref=e190]
                  - option "Training" [ref=e191]
                - combobox [ref=e194]:
                  - list [ref=e195]:
                    - listitem [ref=e196]:
                      - searchbox "Desired Category Select all that apply aPOSTJobCategory1" [ref=e197]
            - generic [ref=e199]:
              - generic [ref=e200]: Are you referred by an existing employee
              - text: Select one option
              - generic [ref=e201]:
                - combobox "Are you referred by an existing employee" [ref=e202]:
                  - option "Yes"
                  - option "No"
                - generic: arrow_drop_down
            - generic [ref=e204]:
              - heading "Your CV check_circle" [level=3] [ref=e205]
              - paragraph [ref=e206]: This document will be submitted with your application form.
              - generic [ref=e207]:
                - generic [ref=e208]:
                  - generic [ref=e209]: insert_drive_file
                  - generic [ref=e210]: Processing.pdf
                - generic [ref=e212] [cursor=pointer]: delete
              - link "View CV (Click here to open in new window)" [ref=e213] [cursor=pointer]:
                - /url: "#"
          - generic [ref=e214]:
            - generic [ref=e217]:
              - heading "Education" [level=3] [ref=e219]
              - paragraph
              - generic [ref=e220]:
                - heading "Higher Education *" [level=5] [ref=e221]:
                  - text: Higher Education
                  - generic [ref=e222]: "*"
                - button "add_circle" [ref=e223] [cursor=pointer]:
                  - generic [ref=e224]: add_circle
                  - generic [ref=e225]: Add
              - generic [ref=e226]:
                - heading "Secondary / Further Education" [level=5] [ref=e227]
                - button "add_circle" [ref=e228] [cursor=pointer]:
                  - generic [ref=e229]: add_circle
                  - generic [ref=e230]: Add
              - generic [ref=e233]:
                - generic [ref=e235]:
                  - generic [ref=e236]: "*"
                  - button "edit" [ref=e237] [cursor=pointer]:
                    - generic [ref=e238]: edit
                  - button "delete" [ref=e239] [cursor=pointer]:
                    - generic [ref=e240]: delete
                - table [ref=e241]:
                  - rowgroup [ref=e242]:
                    - row "College/School UnKnown" [ref=e243]:
                      - cell "College/School" [ref=e244]
                      - cell "UnKnown" [ref=e245]
                    - row "Year [e.g. 1999] 2020" [ref=e246]:
                      - cell "Year [e.g. 1999]" [ref=e247]
                      - cell "2020" [ref=e248]
                - table [ref=e249]:
                  - rowgroup [ref=e250]:
                    - row "Subject Level Result Attempts Year" [ref=e251]:
                      - columnheader "Subject" [ref=e252]
                      - columnheader "Level" [ref=e253]
                      - columnheader "Result" [ref=e254]
                      - columnheader "Attempts" [ref=e255]
                      - columnheader "Year" [ref=e256]
                    - row "Indian School Certificate Examination" [ref=e257]:
                      - cell "Indian School Certificate Examination" [ref=e258]:
                        - paragraph [ref=e259]: Indian School Certificate Examination
                      - cell [ref=e260]:
                        - paragraph
                      - cell [ref=e261]:
                        - paragraph
                      - cell [ref=e262]
                      - cell [ref=e263]:
                        - paragraph
              - generic [ref=e266]:
                - generic [ref=e268]:
                  - generic [ref=e269]: "*"
                  - button "edit" [ref=e270] [cursor=pointer]:
                    - generic [ref=e271]: edit
                  - button "delete" [ref=e272] [cursor=pointer]:
                    - generic [ref=e273]: delete
                - table [ref=e274]:
                  - rowgroup [ref=e275]:
                    - row "College/School UnKnown" [ref=e276]:
                      - cell "College/School" [ref=e277]
                      - cell "UnKnown" [ref=e278]
                    - row "Year [e.g. 1999] 2018" [ref=e279]:
                      - cell "Year [e.g. 1999]" [ref=e280]
                      - cell "2018" [ref=e281]
                - table [ref=e282]:
                  - rowgroup [ref=e283]:
                    - row "Subject Level Result Attempts Year" [ref=e284]:
                      - columnheader "Subject" [ref=e285]
                      - columnheader "Level" [ref=e286]
                      - columnheader "Result" [ref=e287]
                      - columnheader "Attempts" [ref=e288]
                      - columnheader "Year" [ref=e289]
                    - row "Secondary Education Secondary Education" [ref=e290]:
                      - cell "Secondary Education" [ref=e291]:
                        - paragraph [ref=e292]: Secondary Education
                      - cell "Secondary Education" [ref=e293]:
                        - paragraph [ref=e294]: Secondary Education
                      - cell [ref=e295]:
                        - paragraph
                      - cell [ref=e296]
                      - cell [ref=e297]:
                        - paragraph
              - generic [ref=e298]:
                - heading "Other Training / Qualifications" [level=5] [ref=e299]
                - button "add_circle" [ref=e300] [cursor=pointer]:
                  - generic [ref=e301]: add_circle
                  - generic [ref=e302]: Add
            - generic [ref=e304]:
              - generic [ref=e305]:
                - heading "Employment *" [level=3] [ref=e306]:
                  - text: Employment
                  - generic [ref=e307]: "*"
                - button "add_circle" [ref=e308] [cursor=pointer]:
                  - generic [ref=e309]: add_circle
                  - generic [ref=e310]: Add
              - paragraph
              - generic [ref=e313]:
                - generic [ref=e315]:
                  - generic [ref=e316]: "*"
                  - button "edit" [ref=e317] [cursor=pointer]:
                    - generic [ref=e318]: edit
                  - button "delete" [ref=e319] [cursor=pointer]:
                    - generic [ref=e320]: delete
                  - button "copy" [ref=e321] [cursor=pointer]:
                    - generic [ref=e322]: copy
                - table [ref=e323]:
                  - rowgroup [ref=e324]:
                    - row "Employer Hotel De Crown" [ref=e325]:
                      - cell "Employer" [ref=e326]
                      - cell "Hotel De Crown" [ref=e327]
                    - row "Country" [ref=e328]:
                      - cell "Country" [ref=e329]
                      - cell [ref=e330]
              - generic [ref=e333]:
                - generic [ref=e335]:
                  - generic [ref=e336]: "*"
                  - button "edit" [ref=e337] [cursor=pointer]:
                    - generic [ref=e338]: edit
                  - button "delete" [ref=e339] [cursor=pointer]:
                    - generic [ref=e340]: delete
                  - button "copy" [ref=e341] [cursor=pointer]:
                    - generic [ref=e342]: copy
                - table [ref=e343]:
                  - rowgroup [ref=e344]:
                    - row "Employer Presentably" [ref=e345]:
                      - cell "Employer" [ref=e346]
                      - cell "Presentably" [ref=e347]
                    - row "Country" [ref=e348]:
                      - cell "Country" [ref=e349]
                      - cell [ref=e350]
            - dialog [ref=e351]:
              - document:
                - generic [ref=e352]:
                  - generic [ref=e353]:
                    - generic [ref=e354]: Edit employment
                    - generic "Close" [ref=e355] [cursor=pointer]:
                      - generic [ref=e356]: close
                  - generic [ref=e361]:
                    - heading "Employer Details check_circle" [level=3] [ref=e362]
                    - generic [ref=e366]:
                      - generic [ref=e367]: Employer*
                      - textbox "Employer" [ref=e368]: Hotel De Crown
                    - generic [ref=e372]:
                      - generic [ref=e373]: Industry*
                      - textbox "Industry" [ref=e374]: test
                    - generic [ref=e378]:
                      - generic [ref=e379]: Address*
                      - textbox "Address" [ref=e380]: test
                    - generic [ref=e384]:
                      - generic [ref=e385]: Address line 2
                      - textbox "Address line 2" [ref=e386]
                    - generic [ref=e390]:
                      - generic [ref=e391]: City*
                      - textbox "City" [ref=e392]: test
                    - generic [ref=e396]:
                      - generic [ref=e397]: County*
                      - textbox "County" [ref=e398]: test
                    - generic [ref=e399]:
                      - generic [ref=e400]: Country*
                      - text: Select one option
                      - generic [ref=e401]:
                        - combobox "Country*" [ref=e402]:
                          - option "United Kingdom"
                          - option "Abkhazia" [selected]
                          - option "Afghanistan"
                          - option "Akrotiri and Dhekelia"
                          - option "Åland"
                          - option "Albania"
                          - option "Algeria"
                          - option "American Samoa"
                          - option "Andorra"
                          - option "Angola"
                          - option "Anguilla"
                          - option "Antigua and Barbuda"
                          - option "Argentina"
                          - option "Armenia"
                          - option "Aruba"
                          - option "Ascension Island"
                          - option "Australia"
                          - option "Austria"
                          - option "Azerbaijan"
                          - option "Bahamas, The"
                          - option "Bahrain"
                          - option "Bangladesh"
                          - option "Barbados"
                          - option "Belarus"
                          - option "Belgium"
                          - option "Belize"
                          - option "Benin"
                          - option "Bermuda"
                          - option "Bhutan"
                          - option "Bolivia"
                          - option "Bosnia and Herzegovina"
                          - option "Botswana"
                          - option "Brazil"
                          - option "Brunei"
                          - option "Bulgaria"
                          - option "Burkina Faso"
                          - option "Burma"
                          - option "Burundi"
                          - option "Cambodia"
                          - option "Cameroon"
                          - option "Canada"
                          - option "Cape Verde"
                          - option "Cayman Islands"
                          - option "Central African Republic"
                          - option "Chad"
                          - option "Chile"
                          - option "China"
                          - option "Christmas Island"
                          - option "Cocos (Keeling) Islands"
                          - option "Colombia"
                          - option "Comoros"
                          - option "Congo"
                          - option "Cook Islands"
                          - option "Costa Rica"
                          - option "Côte dIvoire"
                          - option "Croatia"
                          - option "Cuba"
                          - option "Cyprus"
                          - option "Czech Republic"
                          - option "Denmark"
                          - option "Djibouti"
                          - option "Dominica"
                          - option "Dominican Republic"
                          - option "East Timor"
                          - option "Ecuador"
                          - option "Egypt"
                          - option "El Salvador"
                          - option "Equatorial Guinea"
                          - option "Eritrea"
                          - option "Estonia"
                          - option "Ethiopia"
                          - option "Fiji"
                          - option "Finland"
                          - option "France"
                          - option "French Polynesia"
                          - option "Gabon"
                          - option "Gambia, The"
                          - option "Georgia"
                          - option "Germany"
                          - option "Ghana"
                          - option "Gibraltar"
                          - option "Greece"
                          - option "Greenland"
                          - option "Grenada"
                          - option "Guam"
                          - option "Guatemala"
                          - option "Guernsey"
                          - option "Guinea"
                          - option "Guinea-Bissau"
                          - option "Guyana"
                          - option "Haiti"
                          - option "Honduras"
                          - option "Hong Kong"
                          - option "Hungary"
                          - option "Iceland"
                          - option "India"
                          - option "Indonesia"
                          - option "Iran"
                          - option "Iraq"
                          - option "Ireland"
                          - option "Isle of Man"
                          - option "Israel"
                          - option "Italy"
                          - option "Jamaica"
                          - option "Japan"
                          - option "Jersey"
                          - option "Jordan"
                          - option "Kazakhstan"
                          - option "Kenya"
                          - option "Kiribati"
                          - option "Korea, North"
                          - option "Korea, South"
                          - option "Kosovo"
                          - option "Kuwait"
                          - option "Kyrgyzstan"
                          - option "Laos"
                          - option "Latvia"
                          - option "Lebanon"
                          - option "Lesotho"
                          - option "Liberia"
                          - option "Libya"
                          - option "Liechtenstein"
                          - option "Lithuania"
                          - option "Luxembourg"
                          - option "Macao"
                          - option "Macedonia"
                          - option "Madagascar"
                          - option "Malawi"
                          - option "Malaysia"
                          - option "Maldives"
                          - option "Mali"
                          - option "Malta"
                          - option "Marshall Islands"
                          - option "Mauritania"
                          - option "Mauritius"
                          - option "Mayotte"
                          - option "Mexico"
                          - option "Micronesia"
                          - option "Moldova"
                          - option "Monaco"
                          - option "Mongolia"
                          - option "Montenegro"
                          - option "Morocco"
                          - option "Mozambique"
                          - option "Nagorno-Karabakh"
                          - option "Namibia"
                          - option "Nauru"
                          - option "Nepal"
                          - option "Netherlands"
                          - option "New Caledonia"
                          - option "New Zealand"
                          - option "Nicaragua"
                          - option "Niger"
                          - option "Nigeria"
                          - option "Norway"
                          - option "Oman"
                          - option "Pakistan"
                          - option "Palau"
                          - option "Palestine"
                          - option "Panama"
                          - option "Papua New Guinea"
                          - option "Paraguay"
                          - option "Peru"
                          - option "Philippines"
                          - option "Poland"
                          - option "Portugal"
                          - option "Puerto Rico"
                          - option "Qatar"
                          - option "Romania"
                          - option "Russia"
                          - option "Rwanda"
                          - option "Saint Barthélemy"
                          - option "Saint Kitts and Nevis"
                          - option "Saint Lucia"
                          - option "Saint Martin"
                          - option "Saint Pierre and Miquelon"
                          - option "Saint Vincent and the Grenadines"
                          - option "Samoa"
                          - option "San Marino"
                          - option "São Tomé and Príncipe"
                          - option "Saudi Arabia"
                          - option "Senegal"
                          - option "Serbia"
                          - option "Seychelles"
                          - option "Sierra Leone"
                          - option "Singapore"
                          - option "Slovakia"
                          - option "Slovenia"
                          - option "Solomon Islands"
                          - option "Somalia"
                          - option "Somaliland"
                          - option "South Africa"
                          - option "South Ossetia"
                          - option "Spain"
                          - option "Sri Lanka"
                          - option "Sudan"
                          - option "Suriname"
                          - option "Swaziland"
                          - option "Sweden"
                          - option "Switzerland"
                          - option "Syria"
                          - option "Taiwan"
                          - option "Tajikistan"
                          - option "Tanzania"
                          - option "Thailand"
                          - option "Togo"
                          - option "Tonga"
                          - option "Transnistria"
                          - option "Trinidad and Tobago"
                          - option "Tunisia"
                          - option "Turkey"
                          - option "Turkmenistan"
                          - option "Turks and Caicos Islands"
                          - option "Tuvalu"
                          - option "Uganda"
                          - option "Ukraine"
                          - option "United Arab Emirates"
                          - option "United States"
                          - option "Uruguay"
                          - option "Uzbekistan"
                          - option "Vanuatu"
                          - option "Vatican City"
                          - option "Venezuela"
                          - option "Vietnam"
                          - option "Virgin Islands, British"
                          - option "Virgin Islands, United States"
                          - option "Wallis and Futuna"
                          - option "Western Sahara"
                          - option "Yemen"
                          - option "Zambia"
                          - option "Zimbabwe"
                        - generic: arrow_drop_down
                    - generic [ref=e406]:
                      - generic [ref=e407]: Post Code*
                      - textbox "Post Code" [ref=e408]: testt
                    - generic [ref=e412]:
                      - generic [ref=e413]: Contact Person*
                      - textbox "Contact Person" [ref=e414]: testt
                    - generic [ref=e418]:
                      - generic [ref=e419]: Email Address
                      - textbox "Email Address" [ref=e420]
                    - generic [ref=e424]:
                      - generic [ref=e425]: Phone
                      - textbox "Phone" [ref=e426]
                    - generic [ref=e430]:
                      - generic [ref=e431]: Fax
                      - textbox "Fax" [ref=e432]
                    - generic [ref=e433]:
                      - generic [ref=e434]: Job Description*
                      - textbox "Job Description*" [ref=e435]:
                        - /placeholder: Answer here...
                        - text: test
                    - generic [ref=e436]:
                      - generic [ref=e437]: Knowledge Gained*
                      - textbox "Knowledge Gained*" [ref=e438]:
                        - /placeholder: Answer here...
                        - text: test
                    - generic [ref=e442]:
                      - generic [ref=e443]: Salary
                      - textbox "Salary" [ref=e444]
                    - generic [ref=e448]:
                      - generic [ref=e449]: Notice Period
                      - textbox "Notice Period" [ref=e450]
                    - generic [ref=e454]:
                      - generic [ref=e455]: Reason for Leaving
                      - textbox "Reason for Leaving" [ref=e456]
                    - generic [ref=e457]:
                      - checkbox "I currently work here" [checked] [ref=e458]
                      - generic [ref=e459]: I currently work here
                    - generic [ref=e462]:
                      - generic [ref=e463]: Date From
                      - textbox "Date From" [active] [ref=e464]:
                        - /placeholder: DD/MM/YYYY
                      - table [ref=e467]:
                        - rowgroup [ref=e468]:
                          - row
                          - row "« July 2026 »" [ref=e469]:
                            - columnheader "«" [ref=e470] [cursor=pointer]
                            - columnheader "July 2026" [ref=e471] [cursor=pointer]
                            - columnheader "»" [ref=e472] [cursor=pointer]
                          - row "Su Mo Tu We Th Fr Sa" [ref=e473]:
                            - columnheader "Su" [ref=e474]
                            - columnheader "Mo" [ref=e475]
                            - columnheader "Tu" [ref=e476]
                            - columnheader "We" [ref=e477]
                            - columnheader "Th" [ref=e478]
                            - columnheader "Fr" [ref=e479]
                            - columnheader "Sa" [ref=e480]
                        - rowgroup [ref=e481]:
                          - row "Date 28 July 2026 Date 29 July 2026 Date 30 July 2026 Date 1 July 2026 Date 2 July 2026 Date 3 July 2026 Date 4 July 2026" [ref=e482]:
                            - button "Date 28 July 2026" [ref=e483]: "28"
                            - button "Date 29 July 2026" [ref=e484]: "29"
                            - button "Date 30 July 2026" [ref=e485]: "30"
                            - button "Date 1 July 2026" [ref=e486]: "1"
                            - button "Date 2 July 2026" [ref=e487]: "2"
                            - button "Date 3 July 2026" [ref=e488]: "3"
                            - button "Date 4 July 2026" [ref=e489]: "4"
                          - row "Date 5 July 2026 Date 6 July 2026 Date 7 July 2026 Date 8 July 2026 Date 9 July 2026 Date 10 July 2026 Date 11 July 2026" [ref=e490]:
                            - button "Date 5 July 2026" [ref=e491]: "5"
                            - button "Date 6 July 2026" [ref=e492]: "6"
                            - button "Date 7 July 2026" [ref=e493]: "7"
                            - button "Date 8 July 2026" [ref=e494]: "8"
                            - button "Date 9 July 2026" [ref=e495]: "9"
                            - button "Date 10 July 2026" [ref=e496]: "10"
                            - button "Date 11 July 2026" [ref=e497]: "11"
                          - row "Date 12 July 2026 Date 13 July 2026 Date 14 July 2026 Date 15 July 2026 Date 16 July 2026 Date 17 July 2026 Date 18 July 2026" [ref=e498]:
                            - button "Date 12 July 2026" [ref=e499]: "12"
                            - button "Date 13 July 2026" [ref=e500]: "13"
                            - button "Date 14 July 2026" [ref=e501]: "14"
                            - button "Date 15 July 2026" [ref=e502]: "15"
                            - button "Date 16 July 2026" [ref=e503]: "16"
                            - button "Date 17 July 2026" [ref=e504]: "17"
                            - button "Date 18 July 2026" [ref=e505]: "18"
                          - row "Date 19 July 2026 Date 20 July 2026 Date 21 July 2026 Date 22 July 2026 Date 23 July 2026 Date 24 July 2026 Date 25 July 2026" [ref=e506]:
                            - button "Date 19 July 2026" [ref=e507]: "19"
                            - button "Date 20 July 2026" [ref=e508]: "20"
                            - button "Date 21 July 2026" [ref=e509]: "21"
                            - button "Date 22 July 2026" [ref=e510]: "22"
                            - button "Date 23 July 2026" [ref=e511]: "23"
                            - button "Date 24 July 2026" [ref=e512]: "24"
                            - button "Date 25 July 2026" [ref=e513]: "25"
                          - row "Date 26 July 2026 Date 27 July 2026 Date 28 July 2026 Date 29 July 2026 Date 30 July 2026 Date 31 July 2026 Date 1 July 2026" [ref=e514]:
                            - button "Date 26 July 2026" [ref=e515]: "26"
                            - button "Date 27 July 2026" [ref=e516]: "27"
                            - button "Date 28 July 2026" [ref=e517]: "28"
                            - button "Date 29 July 2026" [ref=e518]: "29"
                            - button "Date 30 July 2026" [ref=e519]: "30"
                            - button "Date 31 July 2026" [ref=e520]: "31"
                            - button "Date 1 July 2026" [ref=e521]: "1"
                          - row "Date 2 July 2026 Date 3 July 2026 Date 4 July 2026 Date 5 July 2026 Date 6 July 2026 Date 7 July 2026 Date 8 July 2026" [ref=e522]:
                            - button "Date 2 July 2026" [ref=e523]: "2"
                            - button "Date 3 July 2026" [ref=e524]: "3"
                            - button "Date 4 July 2026" [ref=e525]: "4"
                            - button "Date 5 July 2026" [ref=e526]: "5"
                            - button "Date 6 July 2026" [ref=e527]: "6"
                            - button "Date 7 July 2026" [ref=e528]: "7"
                            - button "Date 8 July 2026" [ref=e529]: "8"
                        - rowgroup [ref=e530]:
                          - row
                          - row "Clear" [ref=e531]:
                            - columnheader "Clear" [ref=e532] [cursor=pointer]
                    - button "Continue" [ref=e535] [cursor=pointer]:
                      - generic [ref=e536]: Continue
            - generic [ref=e537]:
              - generic [ref=e538]: Please complete all mandatory questions
              - button "Continue":
                - generic: Continue
              - button "Save and exit":
                - generic: Save and exit
  - status [ref=e539]
```

# Test source

```ts
  1  | import { Page } from '@playwright/test';
  2  | import path from 'path';
  3  | 
  4  | //upload resume file from the repo to the application
  5  | export function getTestFile(fileName: string) {
  6  |   // Resolves file path inside repo - uses project root/docs folder
  7  |   return path.resolve(process.cwd(), 'docs', fileName);
  8  | }
  9  | 
  10 | /**
  11 |  * Date picker helper for this app's Bootstrap Datepicker widget
  12 |  * (confirmed from the "Date From" employment field).
  13 |  *
  14 |  * IMPORTANT: Bootstrap Datepicker renders overlapping day/month/year/
  15 |  * decade/century panes in the DOM simultaneously, hiding all but the
  16 |  * active one via CSS rather than removing them. Every locator below
  17 |  * uses :visible to make sure we only ever touch the currently-shown pane.
  18 |  *
  19 |  * @param trigger      locator for the input that opens the picker
  20 |  *                      e.g. page.getByRole('textbox', { name: 'Date From' })
  21 |  * @param day           target day, e.g. "20" (must match cell text exactly)
  22 |  * @param monthYear     target header text, e.g. "July 2026"
  23 |  * @param direction     'next' (default) or 'prev', depending whether the
  24 |  *                      target date is after or before what's shown on open
  25 |  */
  26 | export async function selectDate(
  27 |   page: Page,
  28 |   trigger: ReturnType<Page['locator']>,
  29 |   day: string,
  30 |   month: string,      // e.g. "July"
  31 |   year: string,        // e.g. "2026"
  32 |   direction: 'next' | 'prev' = 'next',
  33 |   maxClicks = 24
  34 | ) {
  35 |   await trigger.click();
  36 | 
  37 |   const popup = page.locator('#ui-datepicker-div');
> 38 |   await popup.waitFor({ state: 'visible' });
     |               ^ Error: locator.waitFor: Test timeout of 300000ms exceeded.
  39 | 
  40 |   const monthEl = popup.locator('.ui-datepicker-month');
  41 |   const yearEl = popup.locator('.ui-datepicker-year');
  42 |   const usesDropdowns = (await monthEl.evaluate(el => el.tagName)) === 'SELECT';
  43 | 
  44 |   if (usesDropdowns) {
  45 |     // changeMonth/changeYear enabled — jump directly, no clicking needed
  46 |     await monthEl.selectOption({ label: month });
  47 |     await yearEl.selectOption(year);
  48 |   } else {
  49 |     const navBtn = popup.locator(direction === 'next' ? '.ui-datepicker-next' : '.ui-datepicker-prev');
  50 |     for (let i = 0; i < maxClicks; i++) {
  51 |       const currentMonth = (await monthEl.textContent())?.trim();
  52 |       const currentYear = (await yearEl.textContent())?.trim();
  53 |       if (currentMonth?.toLowerCase() === month.toLowerCase() && currentYear === year) break;
  54 |       if (i === maxClicks - 1) {
  55 |         throw new Error(`selectDate: could not reach ${month} ${year} after ${maxClicks} "${direction}" clicks`);
  56 |       }
  57 |       await navBtn.click();
  58 |     }
  59 |   }
  60 | 
  61 |   const dayLink = popup.locator('td:not(.ui-datepicker-other-month) a', { hasText: new RegExp(`^${day}$`) });
  62 |   await dayLink.click();
  63 | }
```