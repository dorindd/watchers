import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
collection:any=[]
itemNumber=new BehaviorSubject<any>([]);
allPayment=new BehaviorSubject<any>([]);







xerix=[

    {id:1, url:['assets/img/x1.jpg','assets/img/x11.jpg','assets/img/x12.jpg'],name:'Xeric Trappist-1 NASA Edition James Webb', price:249,rev:"3 Reviews",
    txt1: "Xeric Trappist-1 NASA Edition James Webb breaks down timekeeping into its purest form, separating the hours, minutes, and seconds into distinctly isolated functions. The Orbiting Planetary System consists of glowing Super-LumiNova indices and planets to help space explorers keep track of time as they travel in the darkest regions of the universe. To pull this off, Xeric turned to the mechanical regulator clocks of the 18th century, which were used when legibility was essential, and sometimes meant life or death. The constellation-like seconds hand sweeps across the dial similar to comets streaking across the nightsky and once every minute it aligns to complete the Trappist-1 star map dial.",
    txt2: "Xeric Trappist-1 NASA Edition James Webb built around a high-torque, Seiko VH31 movement with semi-sweeping secondshand. The caseback features engraved 50th anniversary commemorative artwork of the Apollo 11 mission patch.",
    txt3: "The straps are made from U.S. Horween leather which is ribbed and stitched to pay tribute to the articulated ridge-lines seen on space gloves.",
    txt4: "In honor of the year of the moon landing, only 1969 pieces of each Trappist-1 NASA Edition colorway will be made and each watch will be individually numbered.",
    txt5: "Movement: Miyota 8215 Automatic: -20/+40 sec per month",
    txt6: "Battery Life:Up to 12 months",
    txt7: "Functions:Super-LumiNova Planetary Hours / Minutes / Star Seconds",
    txt8: "Dial: Constellations Super-LumiNova Star Map",
    txt9: "Case:Hand-finished 316L Stainless Steel ",
    txt10: "Crystal: Ultra Scratch-Resistant Sapphire",
    txt11: "Water Resistance: 5 ATM ",
    txt12: "Dimensions: 42mm x 12mm ",
    txt13: "Lug to Lug: 47mm",
    txt14: "Strap: 20mm U.S. Horween Leather with Tool-free, Quick-release Springbar System",
    txt15: 'Wrist Circumference: 6.25"-9" (160mm/225mm)',
    txt16: "Weight: 3oz (85 grams)",

quantity: 1,
   },
    {id:2, url:['assets/img/x2.jpg','assets/img/x22.jpg','assets/img/x23.jpg'],name:'Xeric Trappist-1 NASA Edition Deep Space Purple',price:499 ,rev:"2 Reviews",


      txt1: "All Xeric Trappist-1 NASA Edition Deep Space Purple has back-filled luminous hands and silkscreened dials for stargazing. The Orbiting Planetary System consists of glowing Super-LumiNova indices and planets to help space explorers keep track of time as they travel in the darkest regions of the universe. The inner luminous planet represents the hours while the outer luminous planet shows the minutes, all while orbiting around the central axis. The constellation-like seconds hand sweeps across the dial similar to comets streaking across the nightsky and once every minute it aligns to complete the Trappist-1 star map dial.",
      txt2: "The Trappist-1 is built around a high-torque, Seiko VH31 movement with semi-sweeping secondshand. The caseback features engraved 50th anniversary commemorative artwork of the Apollo 11 mission patch.",
      txt3: "The straps are made from U.S. Horween leather which is ribbed and stitched to pay tribute to the articulated ridge-lines seen on space gloves.",
      txt4: "In honor of the year of the moon landing, only 1969 pieces of each Trappist-1 NASA Edition colorway will be made and each watch will be individually numbered.",
      txt5: "Movement: Seiko VH31, 2 Jewels Accuracy: -/+15 sec per month",
      txt6: "Battery Life:Up to 12 months",
      txt7: "Functions:Super-LumiNova Planetary Hours / Minutes / Star Seconds",
      txt8: "Dial: Constellations Super-LumiNova Star Map",
      txt9: "Case:Hand-finished 316L Stainless Steel ",
      txt10: "Crystal: Domed Hesalite",
      txt11: "Water Resistance: 5 ATM ",
      txt12: "Dimensions: 44mm x 11mm (+4mm crystal)",
      txt13: "Lug to Lug: 47mm",
      txt14: "Strap: 22mm U.S. Horween Leather with Tool-free, Quick-release Springbar System",
      txt15: 'Wrist Circumference: 6.25"-9" (160mm/225mm)',
      txt16: "Weight: 2.9oz (82 grams)",
    quantity: 1,},
    {id:3, url:['assets/img/x3.jpg','assets/img/x33.jpg','assets/img/x34.jpg'],name:'Xeric Trappist-1 Automatic NASA Edition James Webb',price:245 ,rev:"3 Review",

      txt1: "All Xeric Trappist-1 Automatic NASA Edition James Webb has back-filled luminous hands and silkscreened dials for stargazing. The Orbiting Planetary System consists of glowing Super-LumiNova indices and planets to help space explorers keep track of time as they travel in the darkest regions of the universe. The inner luminous planet represents the hours while the outer luminous planet shows the minutes, all while orbiting around the central axis. The constellation-like seconds hand sweeps across the dial similar to comets streaking across the nightsky and once every minute it aligns to complete the Trappist-1 star map dial.",
      txt2: "The Trappist-1 is built around a high-torque, Seiko VH31 movement with semi-sweeping secondshand. The caseback features engraved 50th anniversary commemorative artwork of the Apollo 11 mission patch.",
      txt3: "The straps are made from U.S. Horween leather which is ribbed and stitched to pay tribute to the articulated ridge-lines seen on space gloves.",
      txt4: "In honor of the year of the moon landing, only 1969 pieces of each Trappist-1 NASA Edition colorway will be made and each watch will be individually numbered.",
      txt5: "Movement: Miyota 8215 Automatic: -20/+40 sec per month",
      txt6: "Battery Life:Up to 12 months",
      txt7: "Functions:Super-LumiNova Planetary Hours / Minutes / Star Seconds",
      txt8: "Dial: Constellations Super-LumiNova Star Map",
      txt9: "Case:Hand-finished 316L Stainless Steel ",
      txt10: "Crystal: Domed Hesalite",
      txt11: "Water Resistance: 5 ATM ",
      txt12: "Dimensions: 44mm x 15mm (+4mm crystal)",
      txt13: "Lug to Lug: 47mm",
      txt14: "Strap: 22mm U.S. Horween Leather with Tool-free, Quick-release Springbar System",
      txt15: 'Wrist Circumference: 6.25"-9" (160mm/225mm)',
      txt16: "Weight: 3.7oz (105 grams)",

    quantity: 1,},
    {id:4, url:['assets/img/x4.jpg','assets/img/x44.jpg','assets/img/x45.jpg'],name:'Xeric Regulator Automatic Royal Sand',price:399 ,rev:"3 Reviews",

      txt1: "All Xeric Regulator Automatic  breaks down timekeeping into its purest form, separating the hours, minutes, and seconds into distinctly isolated functions. The Orbiting Planetary System consists of glowing Super-LumiNova indices and planets to help space explorers keep track of time as they travel in the darkest regions of the universe. To pull this off, Xeric turned to the mechanical regulator clocks of the 18th century, which were used when legibility was essential, and sometimes meant life or death. The constellation-like seconds hand sweeps across the dial similar to comets streaking across the nightsky and once every minute it aligns to complete the Trappist-1 star map dial.",
      txt2: "The Trappist-1 is built around a high-torque, Seiko VH31 movement with semi-sweeping secondshand. The caseback features engraved 50th anniversary commemorative artwork of the Apollo 11 mission patch.",
      txt3: "The straps are made from U.S. Horween leather which is ribbed and stitched to pay tribute to the articulated ridge-lines seen on space gloves.",
      txt4: "In honor of the year of the moon landing, only 1969 pieces of each Trappist-1 NASA Edition colorway will be made and each watch will be individually numbered.",
      txt5: "Movement: Miyota 8215 Automatic: -20/+40 sec per month",
      txt6: "Battery Life:Up to 12 months",
      txt7: "Functions:Super-LumiNova Planetary Hours / Minutes / Star Seconds",
      txt8: "Dial: Constellations Super-LumiNova Star Map",
      txt9: "Case:Hand-finished 316L Stainless Steel ",
      txt10: "Crystal: Ultra Scratch-Resistant Sapphire",
      txt11: "Water Resistance: 5 ATM ",
      txt12: "Dimensions: 42mm x 12mm ",
      txt13: "Lug to Lug: 47mm",
      txt14: "Strap: 20mm U.S. Horween Leather with Tool-free, Quick-release Springbar System",
      txt15: 'Wrist Circumference: 6.25"-9" (160mm/225mm)',
      txt16: "Weight: 3oz (85 grams)",










    quantity: 1,},
    {id:5, url:['assets/img/x5.jpg','assets/img/x55.jpg','assets/img/x56.jpg'],name:'Xeric Halograph II Automatic Bronze Blue Limited Edition',price:480 ,rev:"3 Review",

      txt1: "All Xeric Regulator Automatic  breaks down timekeeping into its purest form, separating the hours, minutes, and seconds into distinctly isolated functions. The Orbiting Planetary System consists of glowing Super-LumiNova indices and planets to help space explorers keep track of time as they travel in the darkest regions of the universe. To pull this off, Xeric turned to the mechanical regulator clocks of the 18th century, which were used when legibility was essential, and sometimes meant life or death. The constellation-like seconds hand sweeps across the dial similar to comets streaking across the nightsky and once every minute it aligns to complete the Trappist-1 star map dial.",
      txt2: "The Trappist-1 is built around a high-torque, Seiko VH31 movement with semi-sweeping secondshand. The caseback features engraved 50th anniversary commemorative artwork of the Apollo 11 mission patch.",
      txt3: "The straps are made from U.S. Horween leather which is ribbed and stitched to pay tribute to the articulated ridge-lines seen on space gloves.",
      txt4: "In honor of the year of the moon landing, only 1969 pieces of each Trappist-1 NASA Edition colorway will be made and each watch will be individually numbered.",
      txt5: "Movement: Miyota 8215 Automatic: -20/+40 sec per month",
      txt6: "Battery Life:Up to 12 months",
      txt7: "Functions:Super-LumiNova Planetary Hours / Minutes / Star Seconds",
      txt8: "Dial: Constellations Super-LumiNova Star Map",
      txt9: "Case:Hand-finished 316L Stainless Steel ",
      txt10: "Crystal: Ultra Scratch-Resistant Sapphire",
      txt11: "Water Resistance: 5 ATM ",
      txt12: "Dimensions: 42mm x 12mm ",
      txt13: "Lug to Lug: 47mm",
      txt14: "Strap: 20mm U.S. Horween Leather with Tool-free, Quick-release Springbar System",
      txt15: 'Wrist Circumference: 6.25"-9" (160mm/225mm)',
      txt16: "Weight: 3oz (85 grams)",

    quantity: 1,},
    {id:6, url:['assets/img/x6.jpg','assets/img/x66.jpg','assets/img/x67.jpg'],name:'Xeric Halograph Tourbillon Collector s Edition Fumé Black', price:699, rev:"3 Reviews",
      txt1: "All Xeric Halograph Tourbillon Collector s Edition Fumé Black  breaks down timekeeping into its purest form, separating the hours, minutes, and seconds into distinctly isolated functions.The dial features our innovative signature split display and halo hands which float over the arcs to encircle the time. The inner arcs display the hours and the outer arcs display the minutes. The time can easily be read through the two halo hands. To pull this off, Xeric turned to the mechanical regulator clocks of the 18th century, which were used when legibility was essential, and sometimes meant life or death. The constellation-like seconds hand sweeps across the dial similar to comets streaking across the nightsky and once every minute it aligns to complete the Trappist-1 star map dial.",
      txt2: "The Trappist-1 is built around a high-torque, Seiko VH31 movement with semi-sweeping secondshand. The caseback features engraved 50th anniversary commemorative artwork of the Apollo 11 mission patch.",
      txt3: "The straps are made from U.S. Horween leather which is ribbed and stitched to pay tribute to the articulated ridge-lines seen on space gloves.",
      txt4: "In honor of the year of the moon landing, only 1969 pieces of each Trappist-1 NASA Edition colorway will be made and each watch will be individually numbered.",
      txt5: "Movement:PTS 3301 Tourbillon, 19 Jewels, 40 Hour Power Reserve ",
      txt6: "Battery Life:Up to 12 months",
      txt7: "Functions:Super-LumiNova Planetary Hours / Minutes / Star Seconds",
      txt8: "Dial: Constellations Super-LumiNova Star Map",
      txt9: "Case:Hand-finished 316L Stainless Steel ",
      txt10: "Crystal:Sapphire",
      txt11: "Water Resistance: 5 ATM ",
      txt12: "Dimensions: 46mm x 13mm ",
      txt13: "Lug to Lug: 46mm",
      txt14: "Strap: 22mm U.S. Horween Leather with Tool-free, Quick-release Springbar System",
      txt15: 'Wrist Circumference: 6.25"-9" (160mm/225mm)',
      txt16: "Weight: 3oz (85 grams)",
    quantity: 1,},





  ]
  archetype=[
    { id: 1, url: ['assets/img/a1.jpg', 'assets/img/a2.jpg', 'assets/img/a3.jpg'], name:'Archetype Caspian Automatic Rose Gold Blue',price:500,rev:'3 Review',

      txt1: " Archetype always cuts away the dials so you can see the oscillating balance wheel while you wear your watch. They've taken that up a notch with the Caspian Automatic by showcasing dual balance wheels - a first for Archetype.To pull this off, Xeric turned to the mechanical regulator clocks of the 18th century, which were used when legibility was essential, and sometimes meant life or death. The constellation-like seconds hand sweeps across the dial similar to comets streaking across the nightsky and once every minute it aligns to complete the Trappist-1 star map dial.",
      txt2: "The Trappist-1 is built around a high-torque, Seiko VH31 movement with semi-sweeping secondshand. The caseback features engraved 50th anniversary commemorative artwork of the Apollo 11 mission patch.",
      txt3: "The straps are made from U.S. Horween leather which is ribbed and stitched to pay tribute to the articulated ridge-lines seen on space gloves.",
      txt4: "In honor of the year of the moon landing, only 1969 pieces of each Trappist-1 NASA Edition colorway will be made and each watch will be individually numbered.",
      txt5: "Movement:PTS JHL-S33 Double Balance, 47 Jewels, 21600 BPH, Up to 36 Hour Power Reserve. ",
      txt6: "Battery Life:Up to 12 months",
      txt7: "Functions:Super-LumiNova Planetary Hours / Minutes / Star Seconds",
      txt8: "Dial: Constellations Super-LumiNova Star Map",
      txt9: "Case:Hand-finished 316L Stainless Steel ",
      txt10: "Crystal: Hardened Mineral",
      txt11: "Water Resistance: 5 ATM ",
      txt12: "Dimensions: 45mm x 12mm ",
      txt13: "Lug to Lug:52mm",
      txt14: "Strap: 22mm U.S. Horween Leather with Tool-free, Quick-release Springbar System",
      txt15: 'Wrist Circumference: 6.25"-9" (160mm/225mm)',
      txt16: "Weight: 2.78oz (79 grams)",


    quantity:1},
    { id: 2, url: ['assets/img/a4.jpg', 'assets/img/a5.jpg', 'assets/img/a6.jpg'], name:'Archetype Dorian Automatic Silver Tan Navy',price:500,rev:'3 Review',


      txt1: " Archetype always cuts away the dials so you can see the oscillating balance wheel while you wear your watch. They've taken that up a notch with the Caspian Automatic by showcasing dual balance wheels - a first for Archetype.To pull this off, Xeric turned to the mechanical regulator clocks of the 18th century, which were used when legibility was essential, and sometimes meant life or death. The constellation-like seconds hand sweeps across the dial similar to comets streaking across the nightsky and once every minute it aligns to complete the Trappist-1 star map dial.",
      txt2: "The Trappist-1 is built around a high-torque, Seiko VH31 movement with semi-sweeping secondshand. The caseback features engraved 50th anniversary commemorative artwork of the Apollo 11 mission patch.",
      txt3: "The straps are made from U.S. Horween leather which is ribbed and stitched to pay tribute to the articulated ridge-lines seen on space gloves.",
      txt4: "In honor of the year of the moon landing, only 1969 pieces of each Trappist-1 NASA Edition colorway will be made and each watch will be individually numbered.",
      txt5: "Movement:PTS JHL-S33 Double Balance, 47 Jewels, 21600 BPH, Up to 36 Hour Power Reserve. ",
      txt6: "Battery Life:Up to 12 months",
      txt7: "Functions:Super-LumiNova Planetary Hours / Minutes / Star Seconds",
      txt8: "Dial: Constellations Super-LumiNova Star Map",
      txt9: "Case:Hand-finished 316L Stainless Steel ",
      txt10: "Crystal: Hardened Mineral",
      txt11: "Water Resistance: 5 ATM ",
      txt12: "Dimensions: 45mm x 12mm ",
      txt13: "Lug to Lug:52mm",
      txt14: "Strap: 22mm U.S. Horween Leather with Tool-free, Quick-release Springbar System",
      txt15: 'Wrist Circumference: 6.25"-9" (160mm/225mm)',
      txt16: "Weight: 2.78oz (79 grams)",

















    quantity:1},
    { id: 3, url: ['assets/img/a7.jpg', 'assets/img/a8.jpg', 'assets/img/a9.jpg'], name:'Archetype Loyalist Automatic Rose Gold Indigo',price:399,rev:'3 Review',


      txt1: " The Loyalist Automatic features a first for Archetype - a big date and calendar complication. The dial is reminiscent of vintage timepieces with a convex domed shape, hand-applied indices and big date frame while the subdials display the current day of the week and current month",
      txt2: "The Loyalist Automatic is built around a high-torque, Seiko VH31 movement with semi-sweeping secondshand. The caseback features engraved 50th anniversary commemorative artwork of the Apollo 11 mission patch.",
      txt3: "The straps are made from U.S. Horween leather which is ribbed and stitched to pay tribute to the articulated ridge-lines seen on space gloves.",
      txt4: "In honor of the year of the moon landing, only 1969 pieces of each Trappist-1 NASA Edition colorway will be made and each watch will be individually numbered.",
      txt5: "Movement:PTS LB-19 Multifunction, 20 Jewel ",
      txt6: "Battery Life:Up to 12 months",
      txt7: "Functions:Super-LumiNova Planetary Hours / Minutes / Star Seconds",
      txt8: "Dial: Constellations Super-LumiNova Star Map",
      txt9: "Case:Hand-finished 316L Stainless Steel ",
      txt10: "Crystal: Hardened Mineral",
      txt11: "Water Resistance: 5 ATM ",
      txt12: "Dimensions: 42mm x 10.8mm ",
      txt13: "Lug to Lug:46mm",
      txt14: "Strap: 22mm U.S. Horween Leather with Tool-free, Quick-release Springbar System",
      txt15: 'Wrist Circumference: 6.25"-9" (160mm/225mm)',
      txt16: "Weight: 2.08oz (59 grams)",



























    quantity:1},
    { id: 4, url: ['assets/img/a10.jpg', 'assets/img/a11.jpg', 'assets/img/a12.jpg'], name:'Archetype Loyalist Automatic Rose Gold Coffee',price:350,rev:'3 Review',

      txt1: "Archetype Loyalist Automatic Rose Gold Coffee - a big date and calendar complication. The dial is reminiscent of vintage timepieces with a convex domed shape, hand-applied indices and big date frame while the subdials display the current day of the week and current month",
      txt2: " Archetype Loyalist Automatic Rose Gold Coffee is built around a high-torque, Seiko VH31 movement with semi-sweeping secondshand. The caseback features engraved 50th anniversary commemorative artwork of the Apollo 11 mission patch.",
      txt3: "The straps are made from U.S. Horween leather which is ribbed and stitched to pay tribute to the articulated ridge-lines seen on space gloves.",
      txt4: "In honor of the year of the moon landing, only 1969 pieces of each Trappist-1 NASA Edition colorway will be made and each watch will be individually numbered.",
      txt5: "Movement:PTS LB-19 Multifunction, 20 Jewel ",
      txt6: "Battery Life:Up to 12 months",
      txt7: "Functions:Super-LumiNova Planetary Hours / Minutes / Star Seconds",
      txt8: "Dial: Constellations Super-LumiNova Star Map",
      txt9: "Case:Hand-finished 316L Stainless Steel ",
      txt10: "Crystal: Hardened Mineral",
      txt11: "Water Resistance: 5 ATM ",
      txt12: "Dimensions: 44mm x 10.8mm ",
      txt13: "Lug to Lug:46mm",
      txt14: "Strap: 22mm U.S. Horween Leather with Tool-free, Quick-release Springbar System",
      txt15: 'Wrist Circumference: 6.25"-9" (160mm/225mm)',
      txt16: "Weight: 2.08oz (59 grams)",






    quantity:1},
    { id: 5, url: ['assets/img/a13.jpg', 'assets/img/a14.jpg', 'assets/img/a15.jpg'], name:'Archetype Caspian Automatic Rose Gold Silver Brown',price:299,rev:'3 Review',


      txt1: "Archetype Caspian Automatic Rose Gold Silver Brown big date and calendar complication. The dial is reminiscent of vintage timepieces with a convex domed shape, hand-applied indices and big date frame while the subdials display the current day of the week and current month",
      txt2: " Archetype Caspian Automatic Rose Gold Silver Brownis built around a high-torque, Seiko VH31 movement with semi-sweeping secondshand. The caseback features engraved 50th anniversary commemorative artwork of the Apollo 11 mission patch.",
      txt3: "The straps are made from U.S. Horween leather which is ribbed and stitched to pay tribute to the articulated ridge-lines seen on space gloves.",
      txt4: "In honor of the year of the moon landing, only 1969 pieces of each Trappist-1 NASA Edition colorway will be made and each watch will be individually numbered.",
      txt5: "Movement:PTS LB-19 Multifunction, 20 Jewel ",
      txt6: "Battery Life:Up to 12 months",
      txt7: "Functions:Super-LumiNova Planetary Hours / Minutes / Star Seconds",
      txt8: "Dial: Constellations Super-LumiNova Star Map",
      txt9: "Case:Hand-finished 316L Stainless Steel ",
      txt10: "Crystal: Hardened Mineral",
      txt11: "Water Resistance: 5 ATM ",
      txt12: "Dimensions: 44mm x 10.8mm ",
      txt13: "Lug to Lug:46mm",
      txt14: "Strap: 22mm U.S. Horween Leather with Tool-free, Quick-release Springbar System",
      txt15: 'Wrist Circumference: 6.25"-9" (160mm/225mm)',
      txt16: "Weight: 2.08oz (59 grams)",








    quantity:1},
    { id: 6, url: ['assets/img/a16.jpg', 'assets/img/a17.jpg', 'assets/img/a18.jpg'], name: 'Archetype Rogue Automatic Silver Tan White',price:289,rev:'3 Review',

      txt1: " Archetype Rogue Automatic Silver Tan Whitebig date and calendar complication. The dial is reminiscent of vintage timepieces with a convex domed shape, hand-applied indices and big date frame while the subdials display the current day of the week and current month",
      txt2: " Archetype Rogue Automatic Silver Tan White built around a high-torque, Seiko VH31 movement with semi-sweeping secondshand. The caseback features engraved 50th anniversary commemorative artwork of the Apollo 11 mission patch.",
      txt3: "The straps are made from U.S. Horween leather which is ribbed and stitched to pay tribute to the articulated ridge-lines seen on space gloves.",
      txt4: "In honor of the year of the moon landing, only 1969 pieces of each Trappist-1 NASA Edition colorway will be made and each watch will be individually numbered.",
      txt5: "Movement:PTS LB-19 Multifunction, 20 Jewel ",
      txt6: "Battery Life:Up to 12 months",
      txt7: "Functions:Super-LumiNova Planetary Hours / Minutes / Star Seconds",
      txt8: "Dial: Constellations Super-LumiNova Star Map",
      txt9: "Case:Hand-finished 316L Stainless Steel ",
      txt10: "Crystal: Hardened Mineral",
      txt11: "Water Resistance: 5 ATM ",
      txt12: "Dimensions: 44mm x 10.8mm ",
      txt13: "Lug to Lug:46mm",
      txt14: "Strap: 22mm U.S. Horween Leather with Tool-free, Quick-release Springbar System",
      txt15: 'Wrist Circumference: 6.25"-9" (160mm/225mm)',
      txt16: "Weight: 2.08oz (59 grams)",













    quantity:1},
  ];
  timex=[
    { id: 1, url: ['assets/img/t1.jpg', 'assets/img/t2.jpg', 'assets/img/t3.jpg'], name: 'Timex Midtown 36mm Silver SS', price:119 , rev: '3 Review',

      txt1: "Timex Midtown 36mm Silver SS date and calendar complication. The dial is reminiscent of vintage timepieces with a convex domed shape, hand-applied indices and big date frame while the subdials display the current day of the week and current month",
      txt2: " Timex Midtown 36mm Silver SS built around a high-torque, Seiko VH31 movement with semi-sweeping secondshand. The caseback features engraved 50th anniversary commemorative artwork of the Apollo 11 mission patch.",
      txt3: "The straps are made from U.S. Horween leather which is ribbed and stitched to pay tribute to the articulated ridge-lines seen on space gloves.",
      txt4: "In honor of the year of the moon landing, only 1969 pieces of each Trappist-1 NASA Edition colorway will be made and each watch will be individually numbered.",
      txt5: "Movement:PTS LB-19 Multifunction, 20 Jewel ",
      txt6: "Battery Life:Up to 12 months",
      txt7: "Functions:Super-LumiNova Planetary Hours / Minutes / Star Seconds",
      txt8: "Dial: Constellations Super-LumiNova Star Map",
      txt9: "Case:Hand-finished 316L Stainless Steel ",
      txt10: "Crystal: Hardened Mineral",
      txt11: "Water Resistance: 5 ATM ",
      txt12: "Dimensions: 44mm x 10.8mm ",
      txt13: "Lug to Lug:47mm",
      txt14: "Strap: 22mm U.S. Horween Leather with Tool-free, Quick-release Springbar System",
      txt15: 'Wrist Circumference: 6.25"-9" (160mm/225mm)',
      txt16: "Weight: 2.08oz (59 grams)",














    quantity: 1},
    { id: 2, url: ['assets/img/t4.jpg', 'assets/img/t5.jpg', 'assets/img/t6.jpg'], name: 'Timex Waterbury Dive Automatic 40mm Black SS', price:289 , rev: '3 Review',

      txt1: "Timex Waterbury Dive Automatic 40mm Black SS date and calendar complication. The dial is reminiscent of vintage timepieces with a convex domed shape, hand-applied indices and big date frame while the subdials display the current day of the week and current month",
      txt2: " Timex Waterbury Dive Automatic 40mm Black SS built around a high-torque, Seiko VH31 movement with semi-sweeping secondshand. The caseback features engraved 50th anniversary commemorative artwork of the Apollo 11 mission patch.",
      txt3: "The straps are made from U.S. Horween leather which is ribbed and stitched to pay tribute to the articulated ridge-lines seen on space gloves.",
      txt4: "In honor of the year of the moon landing, only 1969 pieces of each Trappist-1 NASA Edition colorway will be made and each watch will be individually numbered.",
      txt5: "Movement:PTS LB-19 Multifunction, 20 Jewel ",
      txt6: "Battery Life:Up to 12 months",
      txt7: "Functions:Super-LumiNova Planetary Hours / Minutes / Star Seconds",
      txt8: "Dial: Constellations Super-LumiNova Star Map",
      txt9: "Case:Hand-finished 316L Stainless Steel ",
      txt10: "Crystal: Hardened Mineral",
      txt11: "Water Resistance: 5 ATM ",
      txt12: "Dimensions: 44mm x 10.8mm ",
      txt13: "Lug to Lug:46mm",
      txt14: "Strap: 22mm U.S. Horween Leather with Tool-free, Quick-release Springbar System",
      txt15: 'Wrist Circumference: 6.25"-9" (160mm/225mm)',
      txt16: "Weight: 2.08oz (59 grams)",




    quantity: 1},
    { id: 3, url: ['assets/img/t7.jpg', 'assets/img/t8.jpg', 'assets/img/t9.jpg'], name: '', price:239 , rev: '3 Review',

      txt1: "Timex Expedition North Tide-Temp-Compass 43mm Olive date and calendar complication. The dial is reminiscent of vintage timepieces with a convex domed shape, hand-applied indices and big date frame while the subdials display the current day of the week and current month",
      txt2: " Timex Expedition North Tide-Temp-Compass 43mm Olive built around a high-torque, Seiko VH31 movement with semi-sweeping secondshand. The caseback features engraved 50th anniversary commemorative artwork of the Apollo 11 mission patch.",
      txt3: "The straps are made from U.S. Horween leather which is ribbed and stitched to pay tribute to the articulated ridge-lines seen on space gloves.",
      txt4: "In honor of the year of the moon landing, only 1969 pieces of each Trappist-1 NASA Edition colorway will be made and each watch will be individually numbered.",
      txt5: "Movement:PTS LB-19 Multifunction, 20 Jewel ",
      txt6: "Battery Life:Up to 12 months",
      txt7: "Functions:Super-LumiNova Planetary Hours / Minutes / Star Seconds",
      txt8: "Dial: Constellations Super-LumiNova Star Map",
      txt9: "Case:Hand-finished 316L Stainless Steel ",
      txt10: "Crystal: Hardened Mineral",
      txt11: "Water Resistance: 5 ATM ",
      txt12: "Dimensions: 43mm x 10.8mm ",
      txt13: "Lug to Lug:46mm",
      txt14: "Strap: 22mm U.S. Horween Leather with Tool-free, Quick-release Springbar System",
      txt15: 'Wrist Circumference: 6.25"-9" (160mm/225mm)',
      txt16: "Weight: 2.08oz (59 grams)",
    quantity:1
  },
    { id: 4, url: ['assets/img/t10.jpg', 'assets/img/t11.jpg', 'assets/img/t12.jpg'], name: 'Timex Expedition North Tide-Temp-Compass 43mm Black', price:229, rev: '3 Review',

      txt1: " Timex Expedition North Tide-Temp-Compass 43mm Black date and calendar complication. The dial is reminiscent of vintage timepieces with a convex domed shape, hand-applied indices and big date frame while the subdials display the current day of the week and current month",
      txt2: " Timex Expedition North Tide-Temp-Compass 43mm Black built around a high-torque, Seiko VH31 movement with semi-sweeping secondshand. The caseback features engraved 50th anniversary commemorative artwork of the Apollo 11 mission patch.",
      txt3: "The straps are made from U.S. Horween leather which is ribbed and stitched to pay tribute to the articulated ridge-lines seen on space gloves.",
      txt4: "In honor of the year of the moon landing, only 1969 pieces of each Trappist-1 NASA Edition colorway will be made and each watch will be individually numbered.",
      txt5: "Movement:PTS LB-19 Multifunction, 20 Jewel ",
      txt6: "Battery Life:Up to 12 months",
      txt7: "Functions:Super-LumiNova Planetary Hours / Minutes / Star Seconds",
      txt8: "Dial: Constellations Super-LumiNova Star Map",
      txt9: "Case:Hand-finished 316L Stainless Steel ",
      txt10: "Crystal: Hardened Mineral",
      txt11: "Water Resistance: 5 ATM ",
      txt12: "Dimensions: 43mm x 10.8mm ",
      txt13: "Lug to Lug:46mm",
      txt14: "Strap: 22mm U.S. Horween Leather with Tool-free, Quick-release Springbar System",
      txt15: 'Wrist Circumference: 6.25"-9" (160mm/225mm)',
      txt16: "Weight: 2.08oz (59 grams)",
















    quantity: 1},
    { id: 5, url: ['assets/img/t13.jpg', 'assets/img/t14.jpg', 'assets/img/t15.jpg'], name: 'Timex Q Diver 38mm Black', price:169 , rev: '3 Review',

      txt1: "Timex Q Diver 38mm Black date and calendar complication. The dial is reminiscent of vintage timepieces with a convex domed shape, hand-applied indices and big date frame while the subdials display the current day of the week and current month",
      txt2: "Timex Q Diver 38mm Black built around a high-torque, Seiko VH31 movement with semi-sweeping secondshand. The caseback features engraved 50th anniversary commemorative artwork of the Apollo 11 mission patch.",
      txt3: "The straps are made from U.S. Horween leather which is ribbed and stitched to pay tribute to the articulated ridge-lines seen on space gloves.",
      txt4: "In honor of the year of the moon landing, only 1969 pieces of each Trappist-1 NASA Edition colorway will be made and each watch will be individually numbered.",
      txt5: "Movement:PTS LB-19 Multifunction, 20 Jewel ",
      txt6: "Battery Life:Up to 12 months",
      txt7: "Functions:Super-LumiNova Planetary Hours / Minutes / Star Seconds",
      txt8: "Dial: Constellations Super-LumiNova Star Map",
      txt9: "Case:Hand-finished 316L Stainless Steel ",
      txt10: "Crystal: Hardened Mineral",
      txt11: "Water Resistance: 5 ATM ",
      txt12: "Dimensions: 43mm x 10.8mm ",
      txt13: "Lug to Lug:46mm",
      txt14: "Strap: 22mm U.S. Horween Leather with Tool-free, Quick-release Springbar System",
      txt15: 'Wrist Circumference: 6.25"-9" (160mm/225mm)',
      txt16: "Weight: 2.08oz (59 grams)",













    quantity: 1},
    { id: 6, url: ['assets/img/t16.jpg', 'assets/img/t17.jpg', 'assets/img/t18.jpg'], name: 'Timex Q Diver 38mm Blue', price:179 , rev: '3 Review',

      txt1: "Timex Q Diver 38mm Blue date and calendar complication. The dial is reminiscent of vintage timepieces with a convex domed shape, hand-applied indices and big date frame while the subdials display the current day of the week and current month",
      txt2: "Timex Q Diver 38mm Blue built around a high-torque, Seiko VH31 movement with semi-sweeping secondshand. The caseback features engraved 50th anniversary commemorative artwork of the Apollo 11 mission patch.",
      txt3: "The straps are made from U.S. Horween leather which is ribbed and stitched to pay tribute to the articulated ridge-lines seen on space gloves.",
      txt4: "In honor of the year of the moon landing, only 1969 pieces of each Trappist-1 NASA Edition colorway will be made and each watch will be individually numbered.",
      txt5: "Movement:PTS LB-19 Multifunction, 20 Jewel ",
      txt6: "Battery Life:Up to 12 months",
      txt7: "Functions:Super-LumiNova Planetary Hours / Minutes / Star Seconds",
      txt8: "Dial: Constellations Super-LumiNova Star Map",
      txt9: "Case:Hand-finished 316L Stainless Steel ",
      txt10: "Crystal: Hardened Mineral",
      txt11: "Water Resistance: 5 ATM ",
      txt12: "Dimensions: 43mm x 10.8mm ",
      txt13: "Lug to Lug:48mm",
      txt14: "Strap: 22mm U.S. Horween Leather with Tool-free, Quick-release Springbar System",
      txt15: 'Wrist Circumference: 6.25"-9" (160mm/225mm)',
      txt16: "Weight: 2.08oz (59 grams)",










    quantity: 1},


  ]

  gshock=[
    { id: 1, url: ['assets/img/g1.jpg', 'assets/img/g2.jpg', 'assets/img/g3.jpg'], name: 'G-Shock GA2100 Ana-Digi Camo Utility Gray', price:99, rev: '3 Review',

      txt1: "G-Shock GA2100 Ana-Digi Camo Utility Gray date and calendar complication. The dial is reminiscent of vintage timepieces with a convex domed shape, hand-applied indices and big date frame while the subdials display the current day of the week and current month",
      txt2: "G-Shock GA2100 Ana-Digi Camo Utility Gray built around a high-torque, Seiko VH31 movement with semi-sweeping secondshand. The caseback features engraved 50th anniversary commemorative artwork of the Apollo 11 mission patch.",
      txt3: "The straps are made from U.S. Horween leather which is ribbed and stitched to pay tribute to the articulated ridge-lines seen on space gloves.",
      txt4: "In honor of the year of the moon landing, only 1969 pieces of each Trappist-1 NASA Edition colorway will be made and each watch will be individually numbered.",
      txt5: "Movement:PTS LB-19 Multifunction, 20 Jewel ",
      txt6: "Battery Life:Up to 12 months",
      txt7: "Functions:Super-LumiNova Planetary Hours / Minutes / Star Seconds",
      txt8: "Dial: Constellations Super-LumiNova Star Map",
      txt9: "Case:Hand-finished 316L Stainless Steel ",
      txt10: "Crystal: Hardened Mineral",
      txt11: "Water Resistance: 5 ATM ",
      txt12: "Dimensions: 43mm x 10.8mm ",
      txt13: "Lug to Lug:46mm",
      txt14: "Strap: 22mm U.S. Horween Leather with Tool-free, Quick-release Springbar System",
      txt15: 'Wrist Circumference: 6.25"-9" (160mm/225mm)',
      txt16: "Weight: 2.08oz (59 grams)",















    quantity: 1 },
    { id: 2, url: ['assets/img/g4.jpg', 'assets/img/g5.jpg', 'assets/img/g6.jpg'], name: 'G-Shock DW5600 Camo Utility Beige', price: 89, rev: '3 Review',

      txt1: "G-Shock DW5600 Camo Utility Beige date and calendar complication. The dial is reminiscent of vintage timepieces with a convex domed shape, hand-applied indices and big date frame while the subdials display the current day of the week and current month",
      txt2: "G-Shock DW5600 Camo Utility Beige built around a high-torque, Seiko VH31 movement with semi-sweeping secondshand. The caseback features engraved 50th anniversary commemorative artwork of the Apollo 11 mission patch.",
      txt3: "The straps are made from U.S. Horween leather which is ribbed and stitched to pay tribute to the articulated ridge-lines seen on space gloves.",
      txt4: "In honor of the year of the moon landing, only 1969 pieces of each Trappist-1 NASA Edition colorway will be made and each watch will be individually numbered.",
      txt5: "Movement:PTS LB-19 Multifunction, 20 Jewel ",
      txt6: "Battery Life:Up to 12 months",
      txt7: "Functions:Super-LumiNova Planetary Hours / Minutes / Star Seconds",
      txt8: "Dial: Constellations Super-LumiNova Star Map",
      txt9: "Case:Hand-finished 316L Stainless Steel ",
      txt10: "Crystal: Hardened Mineral",
      txt11: "Water Resistance: 5 ATM ",
      txt12: "Dimensions: 43mm x 10.8mm ",
      txt13: "Lug to Lug:46mm",
      txt14: "Strap: 22mm U.S. Horween Leather with Tool-free, Quick-release Springbar System",
      txt15: 'Wrist Circumference: 6.25"-9" (160mm/225mm)',
      txt16: "Weight: 2.08oz (59 grams)",



























    quantity: 1 },
    { id: 3, url: ['assets/img/g7.jpg', 'assets/img/g8.jpg', 'assets/img/g9.jpg'], name: 'G-Shock GM110RH Hachimura Limited Edition Copper', price: 429, rev: '3 Review',
      txt1: "G-Shock GM110RH Hachimura Limited Edition Copper date and calendar complication. The dial is reminiscent of vintage timepieces with a convex domed shape, hand-applied indices and big date frame while the subdials display the current day of the week and current month",
      txt2: " G-Shock GM110RH Hachimura Limited Edition Copperbuilt around a high-torque, Seiko VH31 movement with semi-sweeping secondshand. The caseback features engraved 50th anniversary commemorative artwork of the Apollo 11 mission patch.",
      txt3: "The straps are made from U.S. Horween leather which is ribbed and stitched to pay tribute to the articulated ridge-lines seen on space gloves.",
      txt4: "In honor of the year of the moon landing, only 1969 pieces of each Trappist-1 NASA Edition colorway will be made and each watch will be individually numbered.",
      txt5: "Movement:PTS LB-19 Multifunction, 20 Jewel ",
      txt6: "Battery Life:Up to 12 months",
      txt7: "Functions:Super-LumiNova Planetary Hours / Minutes / Star Seconds",
      txt8: "Dial: Constellations Super-LumiNova Star Map",
      txt9: "Case:Hand-finished 316L Stainless Steel ",
      txt10: "Crystal: Hardened Mineral",
      txt11: "Water Resistance: 5 ATM ",
      txt12: "Dimensions: 43mm x 10.8mm ",
      txt13: "Lug to Lug:46mm",
      txt14: "Strap: 22mm U.S. Horween Leather with Tool-free, Quick-release Springbar System",
      txt15: 'Wrist Circumference: 6.25"-9" (160mm/225mm)',
      txt16: "Weight: 2.08oz (59 grams)",









    quantity: 1 },
    { id: 4, url: ['assets/img/g10.jpg', 'assets/img/g11.jpg', 'assets/img/g12.jpg'], name: 'G-Shock GA2100 Mystic Forest Limited Edition Green', price: 129, rev: '3 Review',

      txt1: "G-Shock GA2100 Mystic Forest Limited Edition Green date and calendar complication. The dial is reminiscent of vintage timepieces with a convex domed shape, hand-applied indices and big date frame while the subdials display the current day of the week and current month",
      txt2: " G-Shock GA2100 Mystic Forest Limited Edition Green around a high-torque, Seiko VH31 movement with semi-sweeping secondshand. The caseback features engraved 50th anniversary commemorative artwork of the Apollo 11 mission patch.",
      txt3: "The straps are made from U.S. Horween leather which is ribbed and stitched to pay tribute to the articulated ridge-lines seen on space gloves.",
      txt4: "In honor of the year of the moon landing, only 1969 pieces of each Trappist-1 NASA Edition colorway will be made and each watch will be individually numbered.",
      txt5: "Movement:PTS LB-19 Multifunction, 20 Jewel ",
      txt6: "Battery Life:Up to 12 months",
      txt7: "Functions:Super-LumiNova Planetary Hours / Minutes / Star Seconds",
      txt8: "Dial: Constellations Super-LumiNova Star Map",
      txt9: "Case:Hand-finished 316L Stainless Steel ",
      txt10: "Crystal: Hardened Mineral",
      txt11: "Water Resistance: 5 ATM ",
      txt12: "Dimensions: 43mm x 10.8mm ",
      txt13: "Lug to Lug:46mm",
      txt14: "Strap: 22mm U.S. Horween Leather with Tool-free, Quick-release Springbar System",
      txt15: 'Wrist Circumference: 6.25"-9" (160mm/225mm)',
      txt16: "Weight: 2.08oz (59 grams)",


















    quantity: 1 },
    { id: 5, url: ['assets/img/g13.jpg', 'assets/img/g14.jpg', 'assets/img/g15.jpg'], name: 'G-Shock GBD200 Vital Color Limited Edition Purple', price: 150, rev: '3 Review',


      txt1: "G-Shock GBD200 Vital Color Limited Edition Purple date and calendar complication. The dial is reminiscent of vintage timepieces with a convex domed shape, hand-applied indices and big date frame while the subdials display the current day of the week and current month",
      txt2: " G-Shock GBD200 Vital Color Limited Edition Purple around a high-torque, Seiko VH31 movement with semi-sweeping secondshand. The caseback features engraved 50th anniversary commemorative artwork of the Apollo 11 mission patch.",
      txt3: "The straps are made from U.S. Horween leather which is ribbed and stitched to pay tribute to the articulated ridge-lines seen on space gloves.",
      txt4: "In honor of the year of the moon landing, only 1969 pieces of each Trappist-1 NASA Edition colorway will be made and each watch will be individually numbered.",
      txt5: "Movement:PTS LB-19 Multifunction, 20 Jewel ",
      txt6: "Battery Life:Up to 12 months",
      txt7: "Functions:Super-LumiNova Planetary Hours / Minutes / Star Seconds",
      txt8: "Dial: Constellations Super-LumiNova Star Map",
      txt9: "Case:Hand-finished 316L Stainless Steel ",
      txt10: "Crystal: Hardened Mineral",
      txt11: "Water Resistance: 5 ATM ",
      txt12: "Dimensions: 43mm x 10.8mm ",
      txt13: "Lug to Lug:46mm",
      txt14: "Strap: 22mm U.S. Horween Leather with Tool-free, Quick-release Springbar System",
      txt15: 'Wrist Circumference: 6.25"-9" (160mm/225mm)',
      txt16: "Weight: 2.08oz (59 grams)",












    quantity: 1 },
    { id: 6, url: ['assets/img/g16.jpg', 'assets/img/g17.jpg', 'assets/img/g18.jpg'], name: 'G-Shock GM2100 Metal Blue', price:250, rev: '3 Review',

      txt1: "G-Shock GM2100 Metal Blue date and calendar complication. The dial is reminiscent of vintage timepieces with a convex domed shape, hand-applied indices and big date frame while the subdials display the current day of the week and current month",
      txt2: " G-Shock GM2100 Metal Blue around a high-torque, Seiko VH31 movement with semi-sweeping secondshand. The caseback features engraved 50th anniversary commemorative artwork of the Apollo 11 mission patch.",
      txt3: "The straps are made from U.S. Horween leather which is ribbed and stitched to pay tribute to the articulated ridge-lines seen on space gloves.",
      txt4: "In honor of the year of the moon landing, only 1969 pieces of each Trappist-1 NASA Edition colorway will be made and each watch will be individually numbered.",
      txt5: "Movement:PTS LB-19 Multifunction, 20 Jewel ",
      txt6: "Battery Life:Up to 12 months",
      txt7: "Functions:Super-LumiNova Planetary Hours / Minutes / Star Seconds",
      txt8: "Dial: Constellations Super-LumiNova Star Map",
      txt9: "Case:Hand-finished 316L Stainless Steel ",
      txt10: "Crystal: Hardened Mineral",
      txt11: "Water Resistance: 5 ATM ",
      txt12: "Dimensions: 43mm x 10.8mm ",
      txt13: "Lug to Lug:46mm",
      txt14: "Strap: 22mm U.S. Horween Leather with Tool-free, Quick-release Springbar System",
      txt15: 'Wrist Circumference: 6.25"-9" (160mm/225mm)',
      txt16: "Weight: 2.08oz (59 grams)",










    quantity: 1 },


  ]

  california=[
    { id: 1, url: ['assets/img/c1.jpg', 'assets/img/c2.jpg', 'assets/img/c3.jpg'], name: 'California Watch Co. Venice Beach Digital Blue Orange', price: 94, rev: '3 Review',

      txt1: "California Watch Co. Venice Beach Digital Blue Orange date and calendar complication. The dial is reminiscent of vintage timepieces with a convex domed shape, hand-applied indices and big date frame while the subdials display the current day of the week and current month",
      txt2: " California Watch Co. Venice Beach Digital Blue Orange Seiko VH31 movement with semi-sweeping secondshand. The caseback features engraved 50th anniversary commemorative artwork of the Apollo 11 mission patch.",
      txt3: "The straps are made from U.S. Horween leather which is ribbed and stitched to pay tribute to the articulated ridge-lines seen on space gloves.",
      txt4: "In honor of the year of the moon landing, only 1969 pieces of each Trappist-1 NASA Edition colorway will be made and each watch will be individually numbered.",
      txt5: "Movement:PTS LB-19 Multifunction, 20 Jewel ",
      txt6: "Battery Life:Up to 12 months",
      txt7: "Functions:Super-LumiNova Planetary Hours / Minutes / Star Seconds",
      txt8: "Dial: Constellations Super-LumiNova Star Map",
      txt9: "Case:Hand-finished 316L Stainless Steel ",
      txt10: "Crystal: Hardened Mineral",
      txt11: "Water Resistance: 5 ATM ",
      txt12: "Dimensions: 43mm x 10.8mm ",
      txt13: "Lug to Lug:46mm",
      txt14: "Strap: 22mm U.S. Horween Leather with Tool-free, Quick-release Springbar System",
      txt15: 'Wrist Circumference: 6.25"-9" (160mm/225mm)',
      txt16: "Weight: 2.08oz (59 grams)",











    quantity: 1 },
    { id: 2, url: ['assets/img/c4.png', 'assets/img/c5.jpg', 'assets/img/c6.jpg'], name: 'California Watch Co. Venice Beach Digital Clear White', price: 83, rev: '3 Review',

      txt1: "California Watch Co. Venice Beach Digital Clear White date and calendar complication. The dial is reminiscent of vintage timepieces with a convex domed shape, hand-applied indices and big date frame while the subdials display the current day of the week and current month",
      txt2: " California Watch Co. Venice Beach Digital Clear White Seiko VH31 movement with semi-sweeping secondshand. The caseback features engraved 50th anniversary commemorative artwork of the Apollo 11 mission patch.",
      txt3: "The straps are made from U.S. Horween leather which is ribbed and stitched to pay tribute to the articulated ridge-lines seen on space gloves.",
      txt4: "In honor of the year of the moon landing, only 1969 pieces of each Trappist-1 NASA Edition colorway will be made and each watch will be individually numbered.",
      txt5: "Movement:PTS LB-19 Multifunction, 20 Jewel ",
      txt6: "Battery Life:Up to 12 months",
      txt7: "Functions:Super-LumiNova Planetary Hours / Minutes / Star Seconds",
      txt8: "Dial: Constellations Super-LumiNova Star Map",
      txt9: "Case:Hand-finished 316L Stainless Steel ",
      txt10: "Crystal: Hardened Mineral",
      txt11: "Water Resistance: 5 ATM ",
      txt12: "Dimensions: 43mm x 10.8mm ",
      txt13: "Lug to Lug:46mm",
      txt14: "Strap: 22mm U.S. Horween Leather with Tool-free, Quick-release Springbar System",
      txt15: 'Wrist Circumference: 6.25"-9" (160mm/225mm)',
      txt16: "Weight: 2.08oz (59 grams)",















    quantity: 1 },
    { id: 3, url: ['assets/img/c7.jpg', 'assets/img/c8.jpg', 'assets/img/c9.jpg'], name: 'California Watch Co. Golden Gate Chrono Leather Gunmetal Red', price:300, rev: '3 Review',

      txt1: "California Watch Co. Golden Gate Chrono Leather Gunmetal Red date and calendar complication. The dial is reminiscent of vintage timepieces with a convex domed shape, hand-applied indices and big date frame while the subdials display the current day of the week and current month",
      txt2: " California Watch Co. Golden Gate Chrono Leather Gunmetal Red Seiko VH31 movement with semi-sweeping secondshand. The caseback features engraved 50th anniversary commemorative artwork of the Apollo 11 mission patch.",
      txt3: "The straps are made from U.S. Horween leather which is ribbed and stitched to pay tribute to the articulated ridge-lines seen on space gloves.",
      txt4: "In honor of the year of the moon landing, only 1969 pieces of each Trappist-1 NASA Edition colorway will be made and each watch will be individually numbered.",
      txt5: "Movement:PTS LB-19 Multifunction, 20 Jewel ",
      txt6: "Battery Life:Up to 12 months",
      txt7: "Functions:Super-LumiNova Planetary Hours / Minutes / Star Seconds",
      txt8: "Dial: Constellations Super-LumiNova Star Map",
      txt9: "Case:Hand-finished 316L Stainless Steel ",
      txt10: "Crystal: Hardened Mineral",
      txt11: "Water Resistance: 5 ATM ",
      txt12: "Dimensions: 43mm x 10.8mm ",
      txt13: "Lug to Lug:46mm",
      txt14: "Strap: 22mm U.S. Horween Leather with Tool-free, Quick-release Springbar System",
      txt15: 'Wrist Circumference: 6.25"-9" (160mm/225mm)',
      txt16: "Weight: 2.08oz (59 grams)",














    quantity: 1 },
    { id: 4, url: ['assets/img/c10.jpg', 'assets/img/c11.jpg', 'assets/img/c12.jpg'], name: 'California Watch Co. Mavericks Chrono SS All Gunmetal', price:400, rev: '3 Review',

      txt1: "California Watch Co. Mavericks Chrono SS All Gunmetal date and calendar complication. The dial is reminiscent of vintage timepieces with a convex domed shape, hand-applied indices and big date frame while the subdials display the current day of the week and current month",
      txt2: " California Watch Co. Mavericks Chrono SS All Gunmetal Seiko VH31 movement with semi-sweeping secondshand. The caseback features engraved 50th anniversary commemorative artwork of the Apollo 11 mission patch.",
      txt3: "The straps are made from U.S. Horween leather which is ribbed and stitched to pay tribute to the articulated ridge-lines seen on space gloves.",
      txt4: "In honor of the year of the moon landing, only 1969 pieces of each Trappist-1 NASA Edition colorway will be made and each watch will be individually numbered.",
      txt5: "Movement:PTS LB-19 Multifunction, 20 Jewel ",
      txt6: "Battery Life:Up to 12 months",
      txt7: "Functions:Super-LumiNova Planetary Hours / Minutes / Star Seconds",
      txt8: "Dial: Constellations Super-LumiNova Star Map",
      txt9: "Case:Hand-finished 316L Stainless Steel ",
      txt10: "Crystal: Hardened Mineral",
      txt11: "Water Resistance: 5 ATM ",
      txt12: "Dimensions: 43mm x 10.8mm ",
      txt13: "Lug to Lug:46mm",
      txt14: "Strap: 22mm U.S. Horween Leather with Tool-free, Quick-release Springbar System",
      txt15: 'Wrist Circumference: 6.25"-9" (160mm/225mm)',
      txt16: "Weight: 2.08oz (59 grams)",















    quantity: 1 },
    { id: 5, url: ['assets/img/c13.jpg', 'assets/img/c14.jpg', 'assets/img/c15.jpg'], name: 'California Watch Co. Mojave Leather Deep Blue Gray', price: 250, rev: '3 Review',

      txt1: "California Watch Co. Mojave Leather Deep Blue Gray date and calendar complication. The dial is reminiscent of vintage timepieces with a convex domed shape, hand-applied indices and big date frame while the subdials display the current day of the week and current month",
      txt2: " California Watch Co. Mojave Leather Deep Blue Gray Seiko VH31 movement with semi-sweeping secondshand. The caseback features engraved 50th anniversary commemorative artwork of the Apollo 11 mission patch.",
      txt3: "The straps are made from U.S. Horween leather which is ribbed and stitched to pay tribute to the articulated ridge-lines seen on space gloves.",
      txt4: "In honor of the year of the moon landing, only 1969 pieces of each Trappist-1 NASA Edition colorway will be made and each watch will be individually numbered.",
      txt5: "Movement:PTS LB-19 Multifunction, 20 Jewel ",
      txt6: "Battery Life:Up to 12 months",
      txt7: "Functions:Super-LumiNova Planetary Hours / Minutes / Star Seconds",
      txt8: "Dial: Constellations Super-LumiNova Star Map",
      txt9: "Case:Hand-finished 316L Stainless Steel ",
      txt10: "Crystal: Hardened Mineral",
      txt11: "Water Resistance: 5 ATM ",
      txt12: "Dimensions: 43mm x 10.8mm ",
      txt13: "Lug to Lug:46mm",
      txt14: "Strap: 22mm U.S. Horween Leather with Tool-free, Quick-release Springbar System",
      txt15: 'Wrist Circumference: 6.25"-9" (160mm/225mm)',
      txt16: "Weight: 2.08oz (59 grams)",















    quantity: 1 },
    { id: 6, url: ['assets/img/c16.jpg', 'assets/img/c17.jpg', 'assets/img/c18.jpg'], name: 'California Watch Co.Golden Gate Chrono Leather Rose Gold Black', price: 280, rev: '3 Review',



      txt1: "California Watch Co.Golden Gate Chrono Leather Rose Gold Black date and calendar complication. The dial is reminiscent of vintage timepieces with a convex domed shape, hand-applied indices and big date frame while the subdials display the current day of the week and current month",
      txt2: "California Watch Co.Golden Gate Chrono Leather Rose Gold Black VH31 movement with semi-sweeping secondshand. The caseback features engraved 50th anniversary commemorative artwork of the Apollo 11 mission patch.",
      txt3: "The straps are made from U.S. Horween leather which is ribbed and stitched to pay tribute to the articulated ridge-lines seen on space gloves.",
      txt4: "In honor of the year of the moon landing, only 1969 pieces of each Trappist-1 NASA Edition colorway will be made and each watch will be individually numbered.",
      txt5: "Movement:PTS LB-19 Multifunction, 20 Jewel ",
      txt6: "Battery Life:Up to 12 months",
      txt7: "Functions:Super-LumiNova Planetary Hours / Minutes / Star Seconds",
      txt8: "Dial: Constellations Super-LumiNova Star Map",
      txt9: "Case:Hand-finished 316L Stainless Steel ",
      txt10: "Crystal: Hardened Mineral",
      txt11: "Water Resistance: 5 ATM ",
      txt12: "Dimensions: 43mm x 10.8mm ",
      txt13: "Lug to Lug:46mm",
      txt14: "Strap: 22mm U.S. Horween Leather with Tool-free, Quick-release Springbar System",
      txt15: 'Wrist Circumference: 6.25"-9" (160mm/225mm)',
      txt16: "Weight: 2.08oz (59 grams)",













    quantity: 1 },


  ];
  undone=[

    { id: 1, url: ['assets/img/u1.jpg', 'assets/img/u2.jpg', 'assets/img/u3.jpg'], name: 'UNDONE Bambi Chrono Limited Edition', price:340, rev: '3 Review',



      txt1: "UNDONE Bambi Chrono Limited Edition date and calendar complication. The dial is reminiscent of vintage timepieces with a convex domed shape, hand-applied indices and big date frame while the subdials display the current day of the week and current month",
      txt2: "UNDONE Bambi Chrono Limited Edition VH31 movement with semi-sweeping secondshand. The caseback features engraved 50th anniversary commemorative artwork of the Apollo 11 mission patch.",
      txt3: "The straps are made from U.S. Horween leather which is ribbed and stitched to pay tribute to the articulated ridge-lines seen on space gloves.",
      txt4: "In honor of the year of the moon landing, only 1969 pieces of each Trappist-1 NASA Edition colorway will be made and each watch will be individually numbered.",
      txt5: "Movement:PTS LB-19 Multifunction, 20 Jewel ",
      txt6: "Battery Life:Up to 12 months",
      txt7: "Functions:Super-LumiNova Planetary Hours / Minutes / Star Seconds",
      txt8: "Dial: Constellations Super-LumiNova Star Map",
      txt9: "Case:Hand-finished 316L Stainless Steel ",
      txt10: "Crystal: Hardened Mineral",
      txt11: "Water Resistance: 5 ATM ",
      txt12: "Dimensions: 43mm x 10.8mm ",
      txt13: "Lug to Lug:46mm",
      txt14: "Strap: 22mm U.S. Horween Leather with Tool-free, Quick-release Springbar System",
      txt15: 'Wrist Circumference: 6.25"-9" (160mm/225mm)',
      txt16: "Weight: 2.08oz (59 grams)",













    quantity: 1 },
    { id: 2, url: ['assets/img/u4.jpg', 'assets/img/u5.jpg', 'assets/img/u6.jpg'], name: 'UNDONE Pinocchio Chrono Limited Edition', price:345, rev: '3 Review',

      txt1: "UNDONE Pinocchio Chrono Limited Edition date and calendar complication. The dial is reminiscent of vintage timepieces with a convex domed shape, hand-applied indices and big date frame while the subdials display the current day of the week and current month",
      txt2: "UNDONE Pinocchio Chrono Limited Edition movement with semi-sweeping secondshand. The caseback features engraved 50th anniversary commemorative artwork of the Apollo 11 mission patch.",
      txt3: "The straps are made from U.S. Horween leather which is ribbed and stitched to pay tribute to the articulated ridge-lines seen on space gloves.",
      txt4: "In honor of the year of the moon landing, only 1969 pieces of each Trappist-1 NASA Edition colorway will be made and each watch will be individually numbered.",
      txt5: "Movement:PTS LB-19 Multifunction, 20 Jewel ",
      txt6: "Battery Life:Up to 12 months",
      txt7: "Functions:Super-LumiNova Planetary Hours / Minutes / Star Seconds",
      txt8: "Dial: Constellations Super-LumiNova Star Map",
      txt9: "Case:Hand-finished 316L Stainless Steel ",
      txt10: "Crystal: Hardened Mineral",
      txt11: "Water Resistance: 5 ATM ",
      txt12: "Dimensions: 43mm x 10.8mm ",
      txt13: "Lug to Lug:46mm",
      txt14: "Strap: 22mm U.S. Horween Leather with Tool-free, Quick-release Springbar System",
      txt15: 'Wrist Circumference: 6.25"-9" (160mm/225mm)',
      txt16: "Weight: 2.08oz (59 grams)",










    quantity: 1 },
    { id: 3, url: ['assets/img/u7.jpg', 'assets/img/u8.jpg', 'assets/img/u9.jpg'], name: 'UNDONE Peter Pan Chrono Limited Edition', price: 300, rev: '3 Review',


      txt1: "UNDONE Peter Pan Chrono Limited Edition date and calendar complication. The dial is reminiscent of vintage timepieces with a convex domed shape, hand-applied indices and big date frame while the subdials display the current day of the week and current month",
      txt2: " UNDONE Peter Pan Chrono Limited Edition movement with semi-sweeping secondshand. The caseback features engraved 50th anniversary commemorative artwork of the Apollo 11 mission patch.",
      txt3: "The straps are made from U.S. Horween leather which is ribbed and stitched to pay tribute to the articulated ridge-lines seen on space gloves.",
      txt4: "In honor of the year of the moon landing, only 1969 pieces of each Trappist-1 NASA Edition colorway will be made and each watch will be individually numbered.",
      txt5: "Movement:PTS LB-19 Multifunction, 20 Jewel ",
      txt6: "Battery Life:Up to 12 months",
      txt7: "Functions:Super-LumiNova Planetary Hours / Minutes / Star Seconds",
      txt8: "Dial: Constellations Super-LumiNova Star Map",
      txt9: "Case:Hand-finished 316L Stainless Steel ",
      txt10: "Crystal: Hardened Mineral",
      txt11: "Water Resistance: 5 ATM ",
      txt12: "Dimensions: 43mm x 10.8mm ",
      txt13: "Lug to Lug:46mm",
      txt14: "Strap: 22mm U.S. Horween Leather with Tool-free, Quick-release Springbar System",
      txt15: 'Wrist Circumference: 6.25"-9" (160mm/225mm)',
      txt16: "Weight: 2.08oz (59 grams)",











    quantity: 1 },
    { id: 4, url: ['assets/img/u10.jpg', 'assets/img/u11.jpg', 'assets/img/u12.jpg'], name: 'UNDONE Dumbo Chrono Limited Edition', price: 440, rev: '3 Review',


      txt1: "UNDONE Dumbo Chrono Limited Edition date and calendar complication. The dial is reminiscent of vintage timepieces with a convex domed shape, hand-applied indices and big date frame while the subdials display the current day of the week and current month",
      txt2: " UNDONE Dumbo Chrono Limited Edition movement with semi-sweeping secondshand. The caseback features engraved 50th anniversary commemorative artwork of the Apollo 11 mission patch.",
      txt3: "The straps are made from U.S. Horween leather which is ribbed and stitched to pay tribute to the articulated ridge-lines seen on space gloves.",
      txt4: "In honor of the year of the moon landing, only 1969 pieces of each Trappist-1 NASA Edition colorway will be made and each watch will be individually numbered.",
      txt5: "Movement:PTS LB-19 Multifunction, 20 Jewel ",
      txt6: "Battery Life:Up to 12 months",
      txt7: "Functions:Super-LumiNova Planetary Hours / Minutes / Star Seconds",
      txt8: "Dial: Constellations Super-LumiNova Star Map",
      txt9: "Case:Hand-finished 316L Stainless Steel ",
      txt10: "Crystal: Hardened Mineral",
      txt11: "Water Resistance: 5 ATM ",
      txt12: "Dimensions: 43mm x 10.8mm ",
      txt13: "Lug to Lug:46mm",
      txt14: "Strap: 22mm U.S. Horween Leather with Tool-free, Quick-release Springbar System",
      txt15: 'Wrist Circumference: 6.25"-9" (160mm/225mm)',
      txt16: "Weight: 2.08oz (59 grams)",














    quantity: 1 },
    { id: 5, url: ['assets/img/u13.jpg', 'assets/img/u14.jpg', 'assets/img/u15.jpg'], name: 'UNDONE Tinker Bell Limited Edition', price: 250, rev: '3 Review',

      txt1: "UNDONE Tinker Bell Limited Edition date and calendar complication. The dial is reminiscent of vintage timepieces with a convex domed shape, hand-applied indices and big date frame while the subdials display the current day of the week and current month",
      txt2: " UNDONE Tinker Bell Limited Edition movement with semi-sweeping secondshand. The caseback features engraved 50th anniversary commemorative artwork of the Apollo 11 mission patch.",
      txt3: "The straps are made from U.S. Horween leather which is ribbed and stitched to pay tribute to the articulated ridge-lines seen on space gloves.",
      txt4: "In honor of the year of the moon landing, only 1969 pieces of each Trappist-1 NASA Edition colorway will be made and each watch will be individually numbered.",
      txt5: "Movement:PTS LB-19 Multifunction, 20 Jewel ",
      txt6: "Battery Life:Up to 12 months",
      txt7: "Functions:Super-LumiNova Planetary Hours / Minutes / Star Seconds",
      txt8: "Dial: Constellations Super-LumiNova Star Map",
      txt9: "Case:Hand-finished 316L Stainless Steel ",
      txt10: "Crystal: Hardened Mineral",
      txt11: "Water Resistance: 5 ATM ",
      txt12: "Dimensions: 43mm x 10.8mm ",
      txt13: "Lug to Lug:46mm",
      txt14: "Strap: 22mm U.S. Horween Leather with Tool-free, Quick-release Springbar System",
      txt15: 'Wrist Circumference: 6.25"-9" (160mm/225mm)',
      txt16: "Weight: 2.08oz (59 grams)",
















    quantity: 1 },
    { id: 6, url: ['assets/img/u16.jpg', 'assets/img/u17.jpg', 'assets/img/u18.jpg'], name: 'UNDONE Disney Mickey Guess Who s Back Automatic', price: 280, rev: '3 Review',

      txt1: "UNDONE Disney Mickey Guess Who s Back Automatic date and calendar complication. The dial is reminiscent of vintage timepieces with a convex domed shape, hand-applied indices and big date frame while the subdials display the current day of the week and current month",
      txt2: " UNDONE Disney Mickey Guess Who s Back Automatic movement with semi-sweeping secondshand. The caseback features engraved 50th anniversary commemorative artwork of the Apollo 11 mission patch.",
      txt3: "The straps are made from U.S. Horween leather which is ribbed and stitched to pay tribute to the articulated ridge-lines seen on space gloves.",
      txt4: "In honor of the year of the moon landing, only 1969 pieces of each Trappist-1 NASA Edition colorway will be made and each watch will be individually numbered.",
      txt5: "Movement:PTS LB-19 Multifunction, 20 Jewel ",
      txt6: "Battery Life:Up to 12 months",
      txt7: "Functions:Super-LumiNova Planetary Hours / Minutes / Star Seconds",
      txt8: "Dial: Constellations Super-LumiNova Star Map",
      txt9: "Case:Hand-finished 316L Stainless Steel ",
      txt10: "Crystal: Hardened Mineral",
      txt11: "Water Resistance: 5 ATM ",
      txt12: "Dimensions: 43mm x 10.8mm ",
      txt13: "Lug to Lug:46mm",
      txt14: "Strap: 22mm U.S. Horween Leather with Tool-free, Quick-release Springbar System",
      txt15: 'Wrist Circumference: 6.25"-9" (160mm/225mm)',
      txt16: "Weight: 2.08oz (59 grams)",












    quantity: 1 },







  ]

  luminox=[

    { id: 1, url: ['assets/img/l1.jpg', 'assets/img/l2.jpg', 'assets/img/l3.jpg'], name: 'Luminox Swiss 8903  Recycled Ocean Material Blue', price:454, rev: '3 Review',


    txt1: "Luminox Swiss 8903  Recycled Ocean Material Blue date and calendar complication. The dial is reminiscent of vintage timepieces with a convex domed shape, hand-applied indices and big date frame while the subdials display the current day of the week and current month",
      txt2: " Luminox Swiss 8903  Recycled Ocean Material Bluemovement with semi-sweeping secondshand. The caseback features engraved 50th anniversary commemorative artwork of the Apollo 11 mission patch.",
      txt3: "The straps are made from U.S. Horween leather which is ribbed and stitched to pay tribute to the articulated ridge-lines seen on space gloves.",
      txt4: "In honor of the year of the moon landing, only 1969 pieces of each Trappist-1 NASA Edition colorway will be made and each watch will be individually numbered.",
      txt5: "Movement:PTS LB-19 Multifunction, 20 Jewel ",
      txt6: "Battery Life:Up to 12 months",
      txt7: "Functions:Super-LumiNova Planetary Hours / Minutes / Star Seconds",
      txt8: "Dial: Constellations Super-LumiNova Star Map",
      txt9: "Case:Hand-finished 316L Stainless Steel ",
      txt10: "Crystal: Hardened Mineral",
      txt11: "Water Resistance: 5 ATM ",
      txt12: "Dimensions: 43mm x 10.8mm ",
      txt13: "Lug to Lug:46mm",
      txt14: "Strap: 22mm U.S. Horween Leather with Tool-free, Quick-release Springbar System",
      txt15: 'Wrist Circumference: 6.25"-9" (160mm/225mm)',
      txt16: "Weight: 2.08oz (59 grams)",
















    quantity: 1 },
    { id: 2, url: ['assets/img/l4.jpg', 'assets/img/l5.jpg', 'assets/img/l6.jpg'], name: 'Luminox Swiss 0321 Recycled Ocean Material Black', price:545, rev: '3 Review',

      txt1: "Luminox Swiss 0321 Recycled Ocean Material Black date and calendar complication. The dial is reminiscent of vintage timepieces with a convex domed shape, hand-applied indices and big date frame while the subdials display the current day of the week and current month",
      txt2: " Luminox Swiss 0321 Recycled Ocean Material Black with semi-sweeping secondshand. The caseback features engraved 50th anniversary commemorative artwork of the Apollo 11 mission patch.",
      txt3: "The straps are made from U.S. Horween leather which is ribbed and stitched to pay tribute to the articulated ridge-lines seen on space gloves.",
      txt4: "In honor of the year of the moon landing, only 1969 pieces of each Trappist-1 NASA Edition colorway will be made and each watch will be individually numbered.",
      txt5: "Movement:PTS LB-19 Multifunction, 20 Jewel ",
      txt6: "Battery Life:Up to 12 months",
      txt7: "Functions:Super-LumiNova Planetary Hours / Minutes / Star Seconds",
      txt8: "Dial: Constellations Super-LumiNova Star Map",
      txt9: "Case:Hand-finished 316L Stainless Steel ",
      txt10: "Crystal: Hardened Mineral",
      txt11: "Water Resistance: 5 ATM ",
      txt12: "Dimensions: 43mm x 10.8mm ",
      txt13: "Lug to Lug:46mm",
      txt14: "Strap: 22mm U.S. Horween Leather with Tool-free, Quick-release Springbar System",
      txt15: 'Wrist Circumference: 6.25"-9" (160mm/225mm)',
      txt16: "Weight: 2.08oz (59 grams)",











    quantity: 1 },
    { id: 3, url: ['assets/img/l7.jpg', 'assets/img/l8.jpg', 'assets/img/l9.jpg'], name: 'Luminox Swiss 3337 Commando Raider Green Black', price: 597, rev: '3 Review',


      txt1: " Luminox Swiss 3337 Commando Raider Green Black date and calendar complication. The dial is reminiscent of vintage timepieces with a convex domed shape, hand-applied indices and big date frame while the subdials display the current day of the week and current month",
      txt2: " Luminox Swiss 3337 Commando Raider Green Black with semi-sweeping secondshand. The caseback features engraved 50th anniversary commemorative artwork of the Apollo 11 mission patch.",
      txt3: "The straps are made from U.S. Horween leather which is ribbed and stitched to pay tribute to the articulated ridge-lines seen on space gloves.",
      txt4: "In honor of the year of the moon landing, only 1969 pieces of each Trappist-1 NASA Edition colorway will be made and each watch will be individually numbered.",
      txt5: "Movement:PTS LB-19 Multifunction, 20 Jewel ",
      txt6: "Battery Life:Up to 12 months",
      txt7: "Functions:Super-LumiNova Planetary Hours / Minutes / Star Seconds",
      txt8: "Dial: Constellations Super-LumiNova Star Map",
      txt9: "Case:Hand-finished 316L Stainless Steel ",
      txt10: "Crystal: Hardened Mineral",
      txt11: "Water Resistance: 5 ATM ",
      txt12: "Dimensions: 43mm x 10.8mm ",
      txt13: "Lug to Lug:46mm",
      txt14: "Strap: 22mm U.S. Horween Leather with Tool-free, Quick-release Springbar System",
      txt15: 'Wrist Circumference: 6.25"-9" (160mm/225mm)',
      txt16: "Weight: 2.08oz (59 grams)",











    quantity: 1 },
    { id: 4, url: ['assets/img/l10.jpg', 'assets/img/l11.jpg', 'assets/img/l12.jpg'], name: 'Luminox Swiss 3501 Navy SEAL Black', price:395, rev: '3 Review',

      txt1: " Luminox Swiss 3501 Navy SEAL Black date and calendar complication. The dial is reminiscent of vintage timepieces with a convex domed shape, hand-applied indices and big date frame while the subdials display the current day of the week and current month",
      txt2: " Luminox Swiss 3501 Navy SEAL Black with semi-sweeping secondshand. The caseback features engraved 50th anniversary commemorative artwork of the Apollo 11 mission patch.",
      txt3: "The straps are made from U.S. Horween leather which is ribbed and stitched to pay tribute to the articulated ridge-lines seen on space gloves.",
      txt4: "In honor of the year of the moon landing, only 1969 pieces of each Trappist-1 NASA Edition colorway will be made and each watch will be individually numbered.",
      txt5: "Movement:PTS LB-19 Multifunction, 20 Jewel ",
      txt6: "Battery Life:Up to 12 months",
      txt7: "Functions:Super-LumiNova Planetary Hours / Minutes / Star Seconds",
      txt8: "Dial: Constellations Super-LumiNova Star Map",
      txt9: "Case:Hand-finished 316L Stainless Steel ",
      txt10: "Crystal: Hardened Mineral",
      txt11: "Water Resistance: 5 ATM ",
      txt12: "Dimensions: 43mm x 10.8mm ",
      txt13: "Lug to Lug:46mm",
      txt14: "Strap: 22mm U.S. Horween Leather with Tool-free, Quick-release Springbar System",
      txt15: 'Wrist Circumference: 6.25"-9" (160mm/225mm)',
      txt16: "Weight: 2.08oz (59 grams)",











    quantity: 1 },
    { id: 5, url: ['assets/img/l13.jpg', 'assets/img/l14.jpg', 'assets/img/l15.jpg'], name: 'Luminox Swiss 3135 Pacific Diver Red', price: 595, rev: '3 Review',

      txt1: " Luminox Swiss 3135 Pacific Diver Red date and calendar complication. The dial is reminiscent of vintage timepieces with a convex domed shape, hand-applied indices and big date frame while the subdials display the current day of the week and current month",
      txt2: " Luminox Swiss 3135 Pacific Diver Red with semi-sweeping secondshand. The caseback features engraved 50th anniversary commemorative artwork of the Apollo 11 mission patch.",
      txt3: "The straps are made from U.S. Horween leather which is ribbed and stitched to pay tribute to the articulated ridge-lines seen on space gloves.",
      txt4: "In honor of the year of the moon landing, only 1969 pieces of each Trappist-1 NASA Edition colorway will be made and each watch will be individually numbered.",
      txt5: "Movement:PTS LB-19 Multifunction, 20 Jewel ",
      txt6: "Battery Life:Up to 12 months",
      txt7: "Functions:Super-LumiNova Planetary Hours / Minutes / Star Seconds",
      txt8: "Dial: Constellations Super-LumiNova Star Map",
      txt9: "Case:Hand-finished 316L Stainless Steel ",
      txt10: "Crystal: Hardened Mineral",
      txt11: "Water Resistance: 5 ATM ",
      txt12: "Dimensions: 43mm x 10.8mm ",
      txt13: "Lug to Lug:46mm",
      txt14: "Strap: 22mm U.S. Horween Leather with Tool-free, Quick-release Springbar System",
      txt15: 'Wrist Circumference: 6.25"-9" (160mm/225mm)',
      txt16: "Weight: 2.08oz (59 grams)",













    quantity: 1 },
    { id: 6, url: ['assets/img/l16.jpg', 'assets/img/l17.jpg', 'assets/img/l18.jpg'], name: 'Luminox Swiss 3615 Navy SEAL Black Red', price:545, rev: '3 Review',

      txt1: "Luminox Swiss 3615 Navy SEAL Black Red date and calendar complication. The dial is reminiscent of vintage timepieces with a convex domed shape, hand-applied indices and big date frame while the subdials display the current day of the week and current month",
      txt2: " Luminox Swiss 3615 Navy SEAL Black Red with semi-sweeping secondshand. The caseback features engraved 50th anniversary commemorative artwork of the Apollo 11 mission patch.",
      txt3: "The straps are made from U.S. Horween leather which is ribbed and stitched to pay tribute to the articulated ridge-lines seen on space gloves.",
      txt4: "In honor of the year of the moon landing, only 1969 pieces of each Trappist-1 NASA Edition colorway will be made and each watch will be individually numbered.",
      txt5: "Movement:PTS LB-19 Multifunction, 20 Jewel ",
      txt6: "Battery Life:Up to 12 months",
      txt7: "Functions:Super-LumiNova Planetary Hours / Minutes / Star Seconds",
      txt8: "Dial: Constellations Super-LumiNova Star Map",
      txt9: "Case:Hand-finished 316L Stainless Steel ",
      txt10: "Crystal: Hardened Mineral",
      txt11: "Water Resistance: 5 ATM ",
      txt12: "Dimensions: 43mm x 10.8mm ",
      txt13: "Lug to Lug:46mm",
      txt14: "Strap: 22mm U.S. Horween Leather with Tool-free, Quick-release Springbar System",
      txt15: 'Wrist Circumference: 6.25"-9" (160mm/225mm)',
      txt16: "Weight: 2.08oz (59 grams)",















    quantity: 1 },



  ]

  womens=[
    { id: 1, url: ['assets/img/ww1.jpg', 'assets/img/ww2.jpg', 'assets/img/ww3.jpg'], name: 'Timex Midtown 36mm Silver SS', price:119, rev: '3 Review',

      txt1: "Timex Midtown 36mm Silver SS date and calendar complication. The dial is reminiscent of vintage timepieces with a convex domed shape, hand-applied indices and big date frame while the subdials display the current day of the week and current month",
      txt2: " Timex Midtown 36mm Silver SS with semi-sweeping secondshand. The caseback features engraved 50th anniversary commemorative artwork of the Apollo 11 mission patch.",
      txt3: "The straps are made from U.S. Horween leather which is ribbed and stitched to pay tribute to the articulated ridge-lines seen on space gloves.",
      txt4: "In honor of the year of the moon landing, only 1969 pieces of each Trappist-1 NASA Edition colorway will be made and each watch will be individually numbered.",
      txt5: "Movement:PTS LB-19 Multifunction, 20 Jewel ",
      txt6: "Battery Life:Up to 12 months",
      txt7: "Functions:Super-LumiNova Planetary Hours / Minutes / Star Seconds",
      txt8: "Dial: Constellations Super-LumiNova Star Map",
      txt9: "Case:Hand-finished 316L Stainless Steel ",
      txt10: "Crystal: Hardened Mineral",
      txt11: "Water Resistance: 5 ATM ",
      txt12: "Dimensions: 43mm x 10.8mm ",
      txt13: "Lug to Lug:46mm",
      txt14: "Strap: 22mm U.S. Horween Leather with Tool-free, Quick-release Springbar System",
      txt15: 'Wrist Circumference: 6.25"-9" (160mm/225mm)',
      txt16: "Weight: 2.08oz (59 grams)",








    quantity: 1 },
    { id: 2, url: ['assets/img/ww4.jpg', 'assets/img/w5.jpg', 'assets/img/w6.jpg'], name: 'Fossil ES5140 Sadie Multifunction Black', price:148, rev: '3 Review',

      txt1: "Fossil ES5140 Sadie Multifunction Black date and calendar complication. The dial is reminiscent of vintage timepieces with a convex domed shape, hand-applied indices and big date frame while the subdials display the current day of the week and current month",
      txt2: " Fossil ES5140 Sadie Multifunction Black with semi-sweeping secondshand. The caseback features engraved 50th anniversary commemorative artwork of the Apollo 11 mission patch.",
      txt3: "The straps are made from U.S. Horween leather which is ribbed and stitched to pay tribute to the articulated ridge-lines seen on space gloves.",
      txt4: "In honor of the year of the moon landing, only 1969 pieces of each Trappist-1 NASA Edition colorway will be made and each watch will be individually numbered.",
      txt5: "Movement:PTS LB-19 Multifunction, 20 Jewel ",
      txt6: "Battery Life:Up to 12 months",
      txt7: "Functions:Super-LumiNova Planetary Hours / Minutes / Star Seconds",
      txt8: "Dial: Constellations Super-LumiNova Star Map",
      txt9: "Case:Hand-finished 316L Stainless Steel ",
      txt10: "Crystal: Hardened Mineral",
      txt11: "Water Resistance: 5 ATM ",
      txt12: "Dimensions: 43mm x 10.8mm ",
      txt13: "Lug to Lug:46mm",
      txt14: "Strap: 22mm U.S. Horween Leather with Tool-free, Quick-release Springbar System",
      txt15: 'Wrist Circumference: 6.25"-9" (160mm/225mm)',
      txt16: "Weight: 2.08oz (59 grams)",








    quantity: 1 },
    { id: 3, url: ['assets/img/w7.jpg', 'assets/img/w8.jpg', 'assets/img/w9.jpg'], name: 'Ziiiro Lunar Gunmetal Ocean', price:186, rev: '3 Review',

      txt1: "Ziiiro Lunar Gunmetal Ocean date and calendar complication. The dial is reminiscent of vintage timepieces with a convex domed shape, hand-applied indices and big date frame while the subdials display the current day of the week and current month",
      txt2: " Ziiiro Lunar Gunmetal Ocean with semi-sweeping secondshand. The caseback features engraved 50th anniversary commemorative artwork of the Apollo 11 mission patch.",
      txt3: "The straps are made from U.S. Horween leather which is ribbed and stitched to pay tribute to the articulated ridge-lines seen on space gloves.",
      txt4: "In honor of the year of the moon landing, only 1969 pieces of each Trappist-1 NASA Edition colorway will be made and each watch will be individually numbered.",
      txt5: "Movement:PTS LB-19 Multifunction, 20 Jewel ",
      txt6: "Battery Life:Up to 12 months",
      txt7: "Functions:Super-LumiNova Planetary Hours / Minutes / Star Seconds",
      txt8: "Dial: Constellations Super-LumiNova Star Map",
      txt9: "Case:Hand-finished 316L Stainless Steel ",
      txt10: "Crystal: Hardened Mineral",
      txt11: "Water Resistance: 5 ATM ",
      txt12: "Dimensions: 43mm x 10.8mm ",
      txt13: "Lug to Lug:46mm",
      txt14: "Strap: 22mm U.S. Horween Leather with Tool-free, Quick-release Springbar System",
      txt15: 'Wrist Circumference: 6.25"-9" (160mm/225mm)',
      txt16: "Weight: 2.08oz (59 grams)",











    quantity: 1 },
    { id: 4, url: ['assets/img/w10.jpg', 'assets/img/w11.jpg', 'assets/img/w12.jpg'], name: 'Nixon Monopoly Silver Rose Gold Crystal', price:95, rev: '3 Review',

 txt1: "Nixon Monopoly Silver Rose Gold Crystal and calendar complication. The dial is reminiscent of vintage timepieces with a convex domed shape, hand-applied indices and big date frame while the subdials display the current day of the week and current month",
      txt2: " Nixon Monopoly Silver Rose Gold Crystal with semi-sweeping secondshand. The caseback features engraved 50th anniversary commemorative artwork of the Apollo 11 mission patch.",
      txt3: "The straps are made from U.S. Horween leather which is ribbed and stitched to pay tribute to the articulated ridge-lines seen on space gloves.",
      txt4: "In honor of the year of the moon landing, only 1969 pieces of each Trappist-1 NASA Edition colorway will be made and each watch will be individually numbered.",
      txt5: "Movement:PTS LB-19 Multifunction, 20 Jewel ",
      txt6: "Battery Life:Up to 12 months",
      txt7: "Functions:Super-LumiNova Planetary Hours / Minutes / Star Seconds",
      txt8: "Dial: Constellations Super-LumiNova Star Map",
      txt9: "Case:Hand-finished 316L Stainless Steel ",
      txt10: "Crystal: Hardened Mineral",
      txt11: "Water Resistance: 5 ATM ",
      txt12: "Dimensions: 43mm x 10.8mm ",
      txt13: "Lug to Lug:46mm",
      txt14: "Strap: 22mm U.S. Horween Leather with Tool-free, Quick-release Springbar System",
      txt15: 'Wrist Circumference: 6.25"-9" (160mm/225mm)',
      txt16: "Weight: 2.08oz (59 grams)",









    quantity: 1 },
    { id: 5, url: ['assets/img/w13.jpg', 'assets/img/w14.jpg', 'assets/img/w15.jpg'], name: 'Eone Bradley Classic Rose Gold Mesh II', price:285, rev: '3 Review',



      txt1: "Eone Bradley Classic Rose Gold Mesh II and calendar complication. The dial is reminiscent of vintage timepieces with a convex domed shape, hand-applied indices and big date frame while the subdials display the current day of the week and current month",
      txt2: " Eone Bradley Classic Rose Gold Mesh II with semi-sweeping secondshand. The caseback features engraved 50th anniversary commemorative artwork of the Apollo 11 mission patch.",
      txt3: "The straps are made from U.S. Horween leather which is ribbed and stitched to pay tribute to the articulated ridge-lines seen on space gloves.",
      txt4: "In honor of the year of the moon landing, only 1969 pieces of each Trappist-1 NASA Edition colorway will be made and each watch will be individually numbered.",
      txt5: "Movement:PTS LB-19 Multifunction, 20 Jewel ",
      txt6: "Battery Life:Up to 12 months",
      txt7: "Functions:Super-LumiNova Planetary Hours / Minutes / Star Seconds",
      txt8: "Dial: Constellations Super-LumiNova Star Map",
      txt9: "Case:Hand-finished 316L Stainless Steel ",
      txt10: "Crystal: Hardened Mineral",
      txt11: "Water Resistance: 5 ATM ",
      txt12: "Dimensions: 43mm x 10.8mm ",
      txt13: "Lug to Lug:46mm",
      txt14: "Strap: 22mm U.S. Horween Leather with Tool-free, Quick-release Springbar System",
      txt15: 'Wrist Circumference: 6.25"-9" (160mm/225mm)',
      txt16: "Weight: 2.08oz (59 grams)",













    quantity: 1 },
    { id: 6, url: ['assets/img/w16.jpg', 'assets/img/w17.jpg', 'assets/img/w18.jpg'], name: 'Nsquare Snake Queen Automatic Hyper Violet', price:667, rev: '3 Review',

      txt1: "Nsquare Snake Queen Automatic Hyper Violet and calendar complication. The dial is reminiscent of vintage timepieces with a convex domed shape, hand-applied indices and big date frame while the subdials display the current day of the week and current month",
      txt2: " Nsquare Snake Queen Automatic Hyper Violet with semi-sweeping secondshand. The caseback features engraved 50th anniversary commemorative artwork of the Apollo 11 mission patch.",
      txt3: "The straps are made from U.S. Horween leather which is ribbed and stitched to pay tribute to the articulated ridge-lines seen on space gloves.",
      txt4: "In honor of the year of the moon landing, only 1969 pieces of each Trappist-1 NASA Edition colorway will be made and each watch will be individually numbered.",
      txt5: "Movement:PTS LB-19 Multifunction, 20 Jewel ",
      txt6: "Battery Life:Up to 12 months",
      txt7: "Functions:Super-LumiNova Planetary Hours / Minutes / Star Seconds",
      txt8: "Dial: Constellations Super-LumiNova Star Map",
      txt9: "Case:Hand-finished 316L Stainless Steel ",
      txt10: "Crystal: Hardened Mineral",
      txt11: "Water Resistance: 5 ATM ",
      txt12: "Dimensions: 43mm x 10.8mm ",
      txt13: "Lug to Lug:46mm",
      txt14: "Strap: 22mm U.S. Horween Leather with Tool-free, Quick-release Springbar System",
      txt15: 'Wrist Circumference: 6.25"-9" (160mm/225mm)',
      txt16: "Weight: 2.08oz (59 grams)",











    quantity: 1 },





  ]

  watchnew=[{ id: 1, url: ['assets/img/n1.jpg', 'assets/img/n2.jpg', 'assets/img/n3.jpg'], name: 'Xeric Soloscope II Automatic Root Beer Limited Edition', price:699, rev: '3 Review',

    txt1: "All Trappist-1 NASA Edition has back-filled luminous hands and silkscreened dials for stargazing. The Orbiting Planetary System consists of glowing Super-LumiNova indices and planets to help space explorers keep track of time as they travel in the darkest regions of the universe. The inner luminous planet represents the hours while the outer luminous planet shows the minutes, all while orbiting around the central axis. The constellation-like seconds hand sweeps across the dial similar to comets streaking across the nightsky and once every minute it aligns to complete the Trappist-1 star map dial.",
    txt2: "The Trappist-1 is built around a high-torque, Seiko VH31 movement with semi-sweeping secondshand. The caseback features engraved 50th anniversary commemorative artwork of the Apollo 11 mission patch.",
    txt3: "The straps are made from U.S. Horween leather which is ribbed and stitched to pay tribute to the articulated ridge-lines seen on space gloves.",
    txt4: "In honor of the year of the moon landing, only 1969 pieces of each Trappist-1 NASA Edition colorway will be made and each watch will be individually numbered.",
    txt5: "Movement: Seiko VH31, 2 Jewels Accuracy: -/+15 sec per month",
    txt6: "Battery Life:Up to 12 months",
    txt7: "Functions:Super-LumiNova Planetary Hours / Minutes / Star Seconds",
    txt8: "Dial: Constellations Super-LumiNova Star Map",
    txt9: "Case:Hand-finished 316L Stainless Steel ",
    txt10: "Crystal: Domed Hesalite",
    txt11: "Water Resistance: 5 ATM ",
    txt12: "Dimensions: 44mm x 11mm (+4mm crystal)",
    txt13: "Lug to Lug: 47mm",
    txt14: "Strap: 22mm U.S. Horween Leather with Tool-free, Quick-release Springbar System",
    txt15: 'Wrist Circumference: 6.25"-9" (160mm/225mm)',
    txt16: "Weight: 2.9oz (82 grams)",

  quantity: 1 },
    { id: 2, url: ['assets/img/n4.jpg', 'assets/img/n5.jpg', 'assets/img/n6.jpg'], name: 'Timex Waterbury Dive Automatic 40mm Black SS', price: 289, rev: '3 Review',

      txt1: "Timex Waterbury Dive Automatic 40mm Black SS has back-filled luminous hands and silkscreened dials for stargazing. The Orbiting Planetary System consists of glowing Super-LumiNova indices and planets to help space explorers keep track of time as they travel in the darkest regions of the universe. The inner luminous planet represents the hours while the outer luminous planet shows the minutes, all while orbiting around the central axis. The constellation-like seconds hand sweeps across the dial similar to comets streaking across the nightsky and once every minute it aligns to complete the Trappist-1 star map dial.",
    txt2: "The Timex is built around a high-torque, Seiko VH31 movement with semi-sweeping secondshand. The caseback features engraved 50th anniversary commemorative artwork of the Apollo 11 mission patch.",
    txt3: "The straps are made from U.S. Horween leather which is ribbed and stitched to pay tribute to the articulated ridge-lines seen on space gloves.",
    txt4: "In honor of the year of the moon landing, only 1969 pieces of each Trappist-1 NASA Edition colorway will be made and each watch will be individually numbered.",
    txt5: "Movement: Seiko VH31, 2 Jewels Accuracy: -/+15 sec per month",
    txt6: "Battery Life:Up to 12 months",
    txt7: "Functions:Super-LumiNova Planetary Hours / Minutes / Star Seconds",
    txt8: "Dial: Constellations Super-LumiNova Star Map",
    txt9: "Case:Hand-finished 316L Stainless Steel ",
    txt10: "Crystal: Domed Hesalite",
    txt11: "Water Resistance: 5 ATM ",
    txt12: "Dimensions: 44mm x 11mm (+4mm crystal)",
    txt13: "Lug to Lug: 47mm",
    txt14: "Strap: 22mm U.S. Horween Leather with Tool-free, Quick-release Springbar System",
    txt15: 'Wrist Circumference: 6.25"-9" (160mm/225mm)',
    txt16: "Weight: 2.9oz (82 grams)",













    quantity: 1 },
    { id: 3, url: ['assets/img/n7.jpg', 'assets/img/n8.jpg', 'assets/img/n9.jpg'], name: 'Timex Waterbury Traditional Day Date 39mm Blue Gold', price:139, rev: '3 Review',

      txt1: "Timex Waterbury Traditional Day Date 39mm Blue Gold has back-filled luminous hands and silkscreened dials for stargazing. The Orbiting Planetary System consists of glowing Super-LumiNova indices and planets to help space explorers keep track of time as they travel in the darkest regions of the universe. The inner luminous planet represents the hours while the outer luminous planet shows the minutes, all while orbiting around the central axis. The constellation-like seconds hand sweeps across the dial similar to comets streaking across the nightsky and once every minute it aligns to complete the Trappist-1 star map dial.",
    txt2: "Timex Waterbury Traditional Day Date 39mm Blue Gold movement with semi-sweeping secondshand. The caseback features engraved 50th anniversary commemorative artwork of the Apollo 11 mission patch.",
    txt3: "The straps are made from U.S. Horween leather which is ribbed and stitched to pay tribute to the articulated ridge-lines seen on space gloves.",
    txt4: "In honor of the year of the moon landing, only 1969 pieces of each Trappist-1 NASA Edition colorway will be made and each watch will be individually numbered.",
    txt5: "Movement: Seiko VH31, 2 Jewels Accuracy: -/+15 sec per month",
    txt6: "Battery Life:Up to 12 months",
    txt7: "Functions:Super-LumiNova Planetary Hours / Minutes / Star Seconds",
    txt8: "Dial: Constellations Super-LumiNova Star Map",
    txt9: "Case:Hand-finished 316L Stainless Steel ",
    txt10: "Crystal: Domed Hesalite",
    txt11: "Water Resistance: 5 ATM ",
    txt12: "Dimensions: 44mm x 11mm (+4mm crystal)",
    txt13: "Lug to Lug: 47mm",
    txt14: "Strap: 22mm U.S. Horween Leather with Tool-free, Quick-release Springbar System",
    txt15: 'Wrist Circumference: 6.25"-9" (160mm/225mm)',
    txt16: "Weight: 2.9oz (82 grams)",













    quantity: 1 },
    { id: 4, url: ['assets/img/n10.jpg', 'assets/img/n11.jpg', 'assets/img/n12.jpg'], name: 'RGMT Navigator Chono Black SS', price:349, rev:'3 Review',

      txt1: "RGMT Navigator Chono Black SS has back-filled luminous hands and silkscreened dials for stargazing. The Orbiting Planetary System consists of glowing Super-LumiNova indices and planets to help space explorers keep track of time as they travel in the darkest regions of the universe. The inner luminous planet represents the hours while the outer luminous planet shows the minutes, all while orbiting around the central axis. The constellation-like seconds hand sweeps across the dial similar to comets streaking across the nightsky and once every minute it aligns to complete the Trappist-1 star map dial.",
      txt2: " RGMT Navigator Chono Black SSmovement with semi-sweeping secondshand. The caseback features engraved 50th anniversary commemorative artwork of the Apollo 11 mission patch.",
      txt3: "The straps are made from U.S. Horween leather which is ribbed and stitched to pay tribute to the articulated ridge-lines seen on space gloves.",
      txt4: "In honor of the year of the moon landing, only 1969 pieces of each Trappist-1 NASA Edition colorway will be made and each watch will be individually numbered.",
      txt5: "Movement: Seiko VH31, 2 Jewels Accuracy: -/+15 sec per month",
      txt6: "Battery Life:Up to 12 months",
      txt7: "Functions:Super-LumiNova Planetary Hours / Minutes / Star Seconds",
      txt8: "Dial: Constellations Super-LumiNova Star Map",
      txt9: "Case:Hand-finished 316L Stainless Steel ",
      txt10: "Crystal: Domed Hesalite",
      txt11: "Water Resistance: 5 ATM ",
      txt12: "Dimensions: 44mm x 11mm (+4mm crystal)",
      txt13: "Lug to Lug: 47mm",
      txt14: "Strap: 22mm U.S. Horween Leather with Tool-free, Quick-release Springbar System",
      txt15: 'Wrist Circumference: 6.25"-9" (160mm/225mm)',
      txt16: "Weight: 2.9oz (82 grams)",





    quantity: 1 },
    { id: 5, url: ['assets/img/n13.jpg', 'assets/img/n14.jpg', 'assets/img/n15.jpg'], name: 'Luminox Swiss 3123 Pacific Diver SS Blue', price:695, rev: '3 Review',


      txt1: "Luminox Swiss 3123 Pacific Diver SS Blue has back-filled luminous hands and silkscreened dials for stargazing. The Orbiting Planetary System consists of glowing Super-LumiNova indices and planets to help space explorers keep track of time as they travel in the darkest regions of the universe. The inner luminous planet represents the hours while the outer luminous planet shows the minutes, all while orbiting around the central axis. The constellation-like seconds hand sweeps across the dial similar to comets streaking across the nightsky and once every minute it aligns to complete the Trappist-1 star map dial.",
      txt2: " Luminox Swiss 3123 Pacific Diver SS Blue with semi-sweeping secondshand. The caseback features engraved 50th anniversary commemorative artwork of the Apollo 11 mission patch.",
      txt3: "The straps are made from U.S. Horween leather which is ribbed and stitched to pay tribute to the articulated ridge-lines seen on space gloves.",
      txt4: "In honor of the year of the moon landing, only 1969 pieces of each Trappist-1 NASA Edition colorway will be made and each watch will be individually numbered.",
      txt5: "Movement: Seiko VH31, 2 Jewels Accuracy: -/+15 sec per month",
      txt6: "Battery Life:Up to 12 months",
      txt7: "Functions:Super-LumiNova Planetary Hours / Minutes / Star Seconds",
      txt8: "Dial: Constellations Super-LumiNova Star Map",
      txt9: "Case:Hand-finished 316L Stainless Steel ",
      txt10: "Crystal: Domed Hesalite",
      txt11: "Water Resistance: 5 ATM ",
      txt12: "Dimensions: 44mm x 11mm (+4mm crystal)",
      txt13: "Lug to Lug: 47mm",
      txt14: "Strap: 22mm U.S. Horween Leather with Tool-free, Quick-release Springbar System",
      txt15: 'Wrist Circumference: 6.25"-9" (160mm/225mm)',
      txt16: "Weight: 2.9oz (82 grams)",


















    quantity: 1 },
    { id: 6, url: ['assets/img/n16.jpg', 'assets/img/n17.jpg', 'assets/img/n18.jpg'], name: 'Luminox Swiss 3121BO Pacific Diver Stealth', price: 655, rev: '3 Review',


      txt1: "Luminox Swiss 3121BO Pacific Diver Stealth has back-filled luminous hands and silkscreened dials for stargazing. The Orbiting Planetary System consists of glowing Super-LumiNova indices and planets to help space explorers keep track of time as they travel in the darkest regions of the universe. The inner luminous planet represents the hours while the outer luminous planet shows the minutes, all while orbiting around the central axis. The constellation-like seconds hand sweeps across the dial similar to comets streaking across the nightsky and once every minute it aligns to complete the Trappist-1 star map dial.",
      txt2: " Luminox Swiss 3121BO Pacific Diver Stealth with semi-sweeping secondshand. The caseback features engraved 50th anniversary commemorative artwork of the Apollo 11 mission patch.",
      txt3: "The straps are made from U.S. Horween leather which is ribbed and stitched to pay tribute to the articulated ridge-lines seen on space gloves.",
      txt4: "In honor of the year of the moon landing, only 1969 pieces of each Trappist-1 NASA Edition colorway will be made and each watch will be individually numbered.",
      txt5: "Movement: Seiko VH31, 2 Jewels Accuracy: -/+15 sec per month",
      txt6: "Battery Life:Up to 12 months",
      txt7: "Functions:Super-LumiNova Planetary Hours / Minutes / Star Seconds",
      txt8: "Dial: Constellations Super-LumiNova Star Map",
      txt9: "Case:Hand-finished 316L Stainless Steel ",
      txt10: "Crystal: Domed Hesalite",
      txt11: "Water Resistance: 5 ATM ",
      txt12: "Dimensions: 44mm x 11mm (+4mm crystal)",
      txt13: "Lug to Lug: 47mm",
      txt14: "Strap: 22mm U.S. Horween Leather with Tool-free, Quick-release Springbar System",
      txt15: 'Wrist Circumference: 6.25"-9" (160mm/225mm)',
      txt16: "Weight: 2.9oz (82 grams)",























    quantity: 1 },

]

  getXerix(){
    return this.xerix
  }
  getArchetype(){
    return this.archetype
  }
  getTimes(){
    return this.timex
  }

  getGshock(){
    return this.gshock
  }
  getCollection(){
    return this.collection
  }
  getCalifornia(){
    return this.california

  }
  getUndone(){
    return this.undone
  }
  getLuminox(){
    return this.luminox
  }
  getWomens(){
    return this.womens
  }

  getNew(){
    return this.watchnew
  }

  constructor() { }

  addToCollection(item:any){
    if(this.collection.indexOf(item)!== -1){
      return
    }
    this.collection.push(item);
    localStorage.setItem('token1', JSON.stringify(this.collection));
    this.itemNumber.next(this.collection)
  }

  removeFromCollection(item:any){

    this.collection.splice(this.collection.indexOf(item),1);

    localStorage.setItem('token1', JSON.stringify(this.collection))
     this.itemNumber.next(this.collection)
  }

  getDataFromLocalSTorage() {
    this.collection = JSON.parse(localStorage.getItem('token1')!); // local storage
  }
 getProduct(id:any){
   return this.xerix.find(xerix=>xerix.id===id)

}
 getProduct1(id:any){
   return this.archetype.find(archetype=>archetype.id===id)

}
 getProduct2(id:any){
   return this.timex.find(timex=>timex.id===id)

}
 getProduct3(id:any){
   return this.gshock.find(gshock=>gshock.id===id)

}
 getProduct4(id:any){
   return this.california.find(california=>california.id===id)

}
 getProduct5(id:any){
   return this.undone.find(undone=>undone.id===id)

}
 getProduct6(id:any){
   return this.luminox.find(luminox=>luminox.id===id)

}
 getProduct7(id:any){
   return this.womens.find(womens=>womens.id===id)

}
 getProduct8(id:any){
   return this.watchnew.find(watchnew => watchnew.id===id)

}




total:any
getTotalPrice(){

 this.total=this.collection.reduce(function(acc:any,val:any){


   return  acc+(val.price*val.quantity)



  },0);

this.allPayment.next(this.total)

}

}
