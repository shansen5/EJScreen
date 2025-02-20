﻿define({root:
({
  viewer:{
    main:{
      scaleBarUnits: "english" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "Unable to create map",
      bitly: 'bitly is used to shorten the url for sharing. View the readme file for details on creating and using a bitly key',
      general: "Error"
    }
  },
  tools:{
    basemap: {
    title: "Change map background to show roads, satellite view, etc.",
    label: "Basemap"
    },
    print: {
    layouts:{
      label1: 'Landscape (PDF)',
      label2: 'Portrait (PDF)',
      label3: 'Landscape (Image)',
      label4: 'Portrait (Image)'
    },
    title: "Print Map",
    label: "Print"
    },
    "search":{
                "error": "Location could not be found",
                "notWhatYouWanted": "Not what you wanted?",
                "selectAnother": "Select another location",
                "currentLocation": "Current Location",
                "title": "Find address or place"
            },
    share: {
    title: "Share Map",
    label: "Share",
    menu:{
      facebook:{
        label: "Facebook"
       },
      twitter:{
        label: "Twitter"
      },
      email:{
        label: "Email",
        message: "Check out this map"
      }    
    }
    },
    measure: {
      title: "Measure/Locate",
      label: "Measure"
  },
  data: {
      title: "See EJScreen and other supplementary map data",
    label: "Add Maps",
    menu: {
        geoplatform: {
            label: "Search Geoplatform",
            baseurl: "https://www.geoplatform.gov/sharing/"
        },
        sublayers: {
        label: "Additional Maps"
    },        
        weblayer: {
            label: "Add Map Services"
        },
        searchmenu: {
            label: "Search For Maps"
        }
    }
},
 
  demog: {
      title: "Additional Demographics",
      label: "Additional Demographics"
  },
  ejmap: {
      title: "EJScreen Maps",
      label: "EJScreen Maps"
  },
  comparemap: {
      title: "Side-by-side Maps",
      label: "Side-by-side Maps"
  },
  site: {
      title: "Pick location and see report on a user-defined place or block group",
      label: "Select Location"
  },
  ejreport: {
      title: "Explore Charts",
      label: "Explore Charts"
  },
  ejtable: {
      title: "Tabular View",
      label: "Tabular View"
  },
  erase: {
      title: "Remove the drawings from the map",
      label: "Erase"
  },
  //chart: {
  //    title: "Chart a Site",
 //     label: "Chart a Site"
 // },
  time: {
      // doc about date and time patterns: http://dojotoolkit.org/reference-guide/dojo/date/locale/format.html
      // yyyy: full year, e.g. 2011
      // MMMM: full month name, e.g. December
      // d: day of month, e.g. 5 or 24 ("dd" would be 05 or 24)
      // h: hours by 0-11, e.g. 6 or 11 ("hh" would be 06 or 11)
      // a: am/pm
      // H: hours by 0-23, e.g. 6 or 23 ("HH" would be 06 or 23)
      // ss: seconds, e.g. 08 or 37 (just "s" would be 8 or 37)
      // SSS: milliseconds, e.g. 006 or 123 (just "S" would be 6 or 123)
      centuryPattern: "yyyy G",
      decadePattern: "yyyy", 
      yearPattern: "MMMM yyyy",
      weekPattern: "MMMM d, yyyy",
      hourTimePattern: "h a",
      // e.g. for German: "H:mm:ss:SSS"
      millisecondTimePattern:"h:m:ss.SSS a",
      minuteTimePattern: "h:mm a",
      // e.g. for German: "H:mm"
      monthPattern: "MMMM d, y",
      secondTimePattern: "h:m:s.SSS a",
      title: "Display Time Slider",
      label: "Time",
      timeRange: "<b>Time Range:</b> ${start_time} to ${end_time}",
      timeRangeSingle: "<b>Time Range:</b> ${time}"
    },
    editor: {
      title: "Display Editor",
      label: "Editor"
    },
    legend: {
      title: "Display Legend",
      label: "Legend"
    },
    details: {
      title: "Display Map Details",
      label: "Details"
    },
    bookmark:{
      title: "Create or go to a bookmarked location",
      label: "Bookmarks",
      details: "Click a bookmark to navigate to the location"
    },
    layers: {
      title: "Display layer list",
      label: "Layers"
    },
    search: {
      title: "Find address or place",
      popupTitle: "Location",
      currentLocation: "Current location",
      notWhatYouWanted: "Not what you wanted?" ,
      selectAnother: "Select another location",
      errors:{
       missingLocation: "Location not found"
      }
    }
  },
  panel:{
    close:{
      title: "Close Panel",
      label: "Close"
    }
  }
}),
"ar":1,
"cs":1,
"da":1,
"de":1,
"es":1,
"et":1,
"fi":1,
"fr":1,
"he":1,
"it":1,
"ja":1,
"ko":1,
"lt":1,
"lv":1,
"nl":1,
"nb":1,
"pl":1,
"pt-br":1,
"pt-pt":1,
"ro":1,
"ru":1,
"sv":1,
"zh-cn":1
});