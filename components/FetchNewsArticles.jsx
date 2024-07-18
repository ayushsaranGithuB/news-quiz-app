import React, { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen';
import NewsSelector from './NewsSelector';

const FetchNewsArticles = ({ setStage, setArticlesToConvert }) => {

    const [newsArticles, setNewsArticles] = useState([]);
    const [selectedArticles, setSelectedArticles] = useState([]);


    // isLoading & isError are used to handle loading and error states
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState(null);


    const API_KEY = process.env.FEEDRIKA_API_KEY;
    const url = `https://api.feedrika.com/latest?apiKey=${API_KEY}`;

    const fetchNewsArticles = async () => {
        // const response = await fetch(url);
        // if (response.ok) {
        //     const data = await response.json();
        //     setNewsArticles(data.articles);
        // } else {
        //     setIsError(true);
        //     setError(response.statusText);
        // }
        // setIsLoading(false);

        const dummyData = {
            "results": [
                {
                    "id": "2ab417c46153380b6bcb0225395031ab",
                    "title": "Nato summit live allies expected to agree a substantial package for Ukraine, says Stoltenberg",
                    "description": "Outgoing secretary-general says measures should ‘constitute a strong bridge’ for Ukraine to join NatoHere’s the schedule for today’s talks in Washington (all in local time).8:15am: Nato secretary general’s doorstep Continue reading...",
                    "link": "https://www.theguardian.com/world/live/2024/jul/10/nato-summit-live-ukraine-on-the-agenda-as-leaders-gather-in-washington",
                    "image": "https://i.guim.co.uk/img/media/88527450b59a6b12ca12ca585e99d63045411681/0_296_5808_3485/master/5808.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=ace18c13fff8bf962e765d43c25b4d48",
                    "date": 1720619791,
                    "source": {
                        "id": "315269",
                        "name": "The Guardian",
                        "url": "https://www.theguardian.com/world"
                    },
                    "sentiment": {
                        "score": 8,
                        "text": "positive"
                    }
                },
                {
                    "id": "f4381eea012b57b9e56c8c3d5dda9d8b",
                    "title": "A Biden Confidant Emerges as a Crucial Mideast Diplomat",
                    "description": "Amos Hochstein, an energy policy official who was born in Israel, is playing diplomatic firefighter along the Israel-Lebanon border.",
                    "link": "https://www.nytimes.com/2024/07/10/us/politics/amos-hochstein-lebanon-israel-biden.html",
                    "image": "https://static01.nyt.com/images/2024/07/09/multimedia/00dc-hochstein-zjfl/00dc-hochstein-zjfl-facebookJumbo.jpg",
                    "date": 1720619759,
                    "source": {
                        "id": "315251",
                        "name": "NYT - World News",
                        "url": "https://nytimes.com"
                    },
                    "sentiment": {
                        "score": 0,
                        "text": "neutral"
                    }
                },
                {
                    "id": "2ad597ccab743fd4720458bcd9064d56",
                    "title": "Wimbledon to pay 250,000 in refunds after near-non-stop rain",
                    "description": "Seventy-five of 91 matches scheduled for Tuesday were cancelled, while 12 were carried over to WednesdayWimbledon is to hand out £250,000-worth of refunds after the tournament was hit by near-non-stop rain on Tuesday.There was no play on the outside courts for most of Tuesday and 75 of the 91 scheduled matches were cancelled, while 12 were carried over to Wednesday. Continue reading...",
                    "link": "https://www.theguardian.com/sport/article/2024/jul/10/wimbledon-to-pay-250000-in-refunds-after-near-non-stop-rain-on-tuesday",
                    "image": "https://i.guim.co.uk/img/media/16aeecf48122f7dc1e473c74b85312554a4d7b46/0_0_3500_2100/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=e75cc1760530793c2fe296cb6b3320e6",
                    "date": 1720619743,
                    "source": {
                        "id": "315269",
                        "name": "The Guardian",
                        "url": "https://www.theguardian.com/world"
                    },
                    "sentiment": {
                        "score": -7,
                        "text": "negative"
                    }
                },
                {
                    "id": "a8b5d00ed2ebf1a0b86868f864b840ba",
                    "title": "Nancy Pelosi says its up to Biden whether to stay or go Democratic senator first to publicly say president cant win  live",
                    "description": "Former House speaker gives ambivalent response to whether president should continue in presidential race; Colorado’s Michael Bennet says Biden cannot beat TrumpLast night, Democratic senator Michael Bennet warned that if Joe Biden continues his campaign for president, not only will he lose to Donald Trump, but the GOP will take full control of Congress.However, in his interview with CNN, the Colorado lawmaker did not go so far as to call on Biden to drop out. Here’s the video: Continue reading.....",
                    "link": "https://www.theguardian.com/us-news/live/2024/jul/10/biden-trump-polls-democrats-election-latest-updates",
                    "image": "https://i.guim.co.uk/img/media/6e2b5cdfa099a1870b9acf7e7657ef61806317a7/396_576_5217_3129/master/5217.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=0ee0d5bf5ba222680ee77506ced0a433",
                    "date": 1720619706,
                    "source": {
                        "id": "315269",
                        "name": "The Guardian",
                        "url": "https://www.theguardian.com/world"
                    },
                    "sentiment": {
                        "score": -12,
                        "text": "negative"
                    }
                },
                {
                    "id": "9213229e07ac10b8e852888b4bfa0b42",
                    "title": "Triple murder victims are family of BBC commentator, corporation says, as police search for suspect  latest updates",
                    "description": "Three women – aged 25, 28 and 61 – are understood to be Carol Hunt and two of her daughters, family of BBC racing commentator John HuntA resident living near the scene of the triple murder has told Sky News that suddenly last night there was a large number of police cars in the street, and that some of the officers were armed. He said that at first he thought it must have been a terrorism incident. Derek Turner told viewersIt was like an explosion in the street of police cars and ambulances. I w...",
                    "link": "https://www.theguardian.com/uk-news/live/2024/jul/10/bushey-murder-investigation-police-search-kyle-clifford-manhunt-hertfordshire",
                    "image": "https://i.guim.co.uk/img/media/d55395d4f8aa11aa644d11ac603ef16449c6f34b/0_587_3776_2265/master/3776.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=29c58f6cbaf762d6a897f6597f7789be",
                    "date": 1720619646,
                    "source": {
                        "id": "315269",
                        "name": "The Guardian",
                        "url": "https://www.theguardian.com/world"
                    },
                    "sentiment": {
                        "score": -16,
                        "text": "negative"
                    }
                },
                {
                    "id": "5d30e1dcb7659aa391e9978568cea2bc",
                    "title": "Democratic senators call on DoJ to investigate Clarence Thomas",
                    "description": "Sheldon Whitehouse and Ron Wyden demand inquiry into supreme court justice’s possible ethics and tax violationsThe US attorney general should appoint a special counsel to investigate potential criminal violations of federal ethics and tax laws by the supreme court justice Clarence Thomas, two Democratic senators have said.Thomas has been at the center of an ongoing scandal over undeclared gifts, many from the rightwing mega-donor Harlan Crow, which have included flights, vacations, school fees a...",
                    "link": "https://www.theguardian.com/us-news/article/2024/jul/10/clarence-thomas-investigation-democrats-justice-department",
                    "image": "https://i.guim.co.uk/img/media/b9c502c08a42a30a11115097a1499e58af166f86/0_120_5177_3107/master/5177.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=7a3ac10f7ec5f74248f0a0149c1a2761",
                    "date": 1720619386,
                    "source": {
                        "id": "315269",
                        "name": "The Guardian",
                        "url": "https://www.theguardian.com/world"
                    },
                    "sentiment": {
                        "score": 2,
                        "text": "positive"
                    }
                },
                {
                    "id": "7761a964a5bf32980237ffdf70942ce7",
                    "title": "Microsoft drops its observer seat on OpenAI board amid regulatory scrutiny",
                    "description": "Microsoft took a nonvoting board seat at OpenAI back in November.",
                    "link": "https://www.cnbc.com/2024/07/10/microsoft-reportedly-drops-its-observer-seat-on-openai-board.html",
                    "image": "https://image.cnbcfm.com/api/v1/image/107337299-1700585201332-gettyimages-1794504400-arriens-openaice231121_np3Cx.jpeg?v=1720588053&w=1920&h=1080",
                    "date": 1720619261,
                    "source": {
                        "id": "315247",
                        "name": "International: Top News And Analysis",
                        "url": "https://www.cnbc.com"
                    },
                    "sentiment": {
                        "score": 0,
                        "text": "neutral"
                    }
                },
                {
                    "id": "dd9b0263919e664edf8366b635e3e07f",
                    "title": "U.K. Police Searching for Man Suspected of Killing 3 Women With Crossbow",
                    "description": "The women died at the scene near London on Tuesday, the police said. The BBC identified the victims as the wife and children of one of its commentators.",
                    "link": "https://www.nytimes.com/2024/07/10/world/europe/crossbow-attack-uk-manhunt.html",
                    "image": "https://static01.nyt.com/images/2024/07/10/multimedia/10xp-crossbow-fvwm/10xp-crossbow-fvwm-facebookJumbo.jpg",
                    "date": 1720619038,
                    "source": {
                        "id": "315251",
                        "name": "NYT - World News",
                        "url": "https://nytimes.com"
                    },
                    "sentiment": {
                        "score": -16,
                        "text": "negative"
                    }
                },
                {
                    "id": "2b8dc94dff1ef28f9b85a0bdce515f3e",
                    "title": "Middle East Crisis Deadly Israeli Strike Was 4th in Recent Days to Hit School Buildings in Gaza, U.N. Says",
                    "description": "The strike killed at least 27 people and wounded dozens, health authorities in the territory said. Israel said it had targeted a Hamas member who took part in the Oct. 7 attacks.",
                    "link": "https://www.nytimes.com/live/2024/07/10/world/israel-gaza-war-hamas",
                    "image": "https://static01.nyt.com/images/2024/07/10/multimedia/10mideast-crisis-promo-925am-jmvh/10mideast-crisis-promo-925am-jmvh-facebookJumbo.jpg",
                    "date": 1720618936,
                    "source": {
                        "id": "315251",
                        "name": "NYT - World News",
                        "url": "https://nytimes.com"
                    },
                    "sentiment": {
                        "score": -17,
                        "text": "negative"
                    }
                },
                {
                    "id": "a94d2588a2cd1445db2800532ef093bd",
                    "title": "ABC anchor caught on video saying Biden cannot serve four more years",
                    "description": "George Stephanopoulos, who interviewed president days ago, says he should not have answered passerby’s questionThe ABC News anchor George Stephanopoulos was captured on camera saying he did not think Joe Biden could serve another four years in office, four days after a major TV interview with the US president and amid a re-election campaign in crisis.The comment came after Biden attempted to assuage concerns among Democrats about his age and mental acuity, including in the recent interview with ...",
                    "link": "https://www.theguardian.com/us-news/article/2024/jul/10/joe-biden-george-stephanopoulos-video-abc",
                    "image": "https://i.guim.co.uk/img/media/9579595bfe2ab3b1d140178fa0e033610ef1eee7/9_0_4142_2485/master/4142.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=b5bdeafe1088b70fb608045176e6f925",
                    "date": 1720618852,
                    "source": {
                        "id": "315269",
                        "name": "The Guardian",
                        "url": "https://www.theguardian.com/world"
                    },
                    "sentiment": {
                        "score": -2,
                        "text": "negative"
                    }
                },
                {
                    "id": "221a66313d061f255d96c3f670b24943",
                    "title": "Victims of Bushey triple murder believed to be family of BBC commentator",
                    "description": "Police search for Kyle Clifford, 26, as BBC says victims are Carol Hunt and two of her daughters, family of BBC racing commentator John HuntPolice search after three women killed in Bushey – live updatesA man feared to be armed with a crossbow was being hunted by armed police after three women from the same family died in a suburban home in a suspected targeted attack.Police said they urgently wanted to trace Kyle Clifford, 26, after being called to a home in Bushey, Hertfordshire, on Tuesday ev...",
                    "link": "https://www.theguardian.com/uk-news/article/2024/jul/10/police-search-for-man-after-three-women-killed-in-bushey",
                    "image": "https://i.guim.co.uk/img/media/d55395d4f8aa11aa644d11ac603ef16449c6f34b/0_587_3776_2265/master/3776.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=2f642040012e18e3a303e50950e1562a",
                    "date": 1720618589,
                    "source": {
                        "id": "315269",
                        "name": "The Guardian",
                        "url": "https://www.theguardian.com/world"
                    },
                    "sentiment": {
                        "score": -27,
                        "text": "negative"
                    }
                },
                {
                    "id": "340da5f726a2eb6b34b8fbe55739c74c",
                    "title": "American Climbers Body Found on Mountain Peru After 22 Years",
                    "description": "Melting glaciers on Mount Huascarn in Peru helped uncover the body of Bill Stampfl, who disappeared while climbing the mountain with two friends.",
                    "link": "https://www.nytimes.com/2024/07/10/world/americas/22-years-ago-he-disappeared-in-an-avalanche-his-body-was-just-found.html",
                    "image": "https://static01.nyt.com/images/2024/07/09/multimedia/00xp-mountaineer/00xp-mountaineer-facebookJumbo.jpg",
                    "date": 1720618546,
                    "source": {
                        "id": "315251",
                        "name": "NYT - World News",
                        "url": "https://nytimes.com"
                    },
                    "sentiment": {
                        "score": -2,
                        "text": "negative"
                    }
                },
                {
                    "id": "904fbf4435796c65460e97f9e7d16a54",
                    "title": "Number of millionaires to soar globally but plunge in the UK, research finds",
                    "description": "The 2024 Global Wealth Report from UBS forecasts a continued increase in the number of millionaires, with the U.K. a notable outlier.",
                    "link": "https://www.cnbc.com/2024/07/10/wealth-report-millionaires-to-soar-globally-but-plunge-in-the-uk.html",
                    "image": "https://image.cnbcfm.com/api/v1/image/108003684-1720594628693-gettyimages-2160804055-economic447861_9jd1enrq.jpeg?v=1720598235&w=1920&h=1080",
                    "date": 1720618504,
                    "source": {
                        "id": "315247",
                        "name": "International: Top News And Analysis",
                        "url": "https://www.cnbc.com"
                    },
                    "sentiment": {
                        "score": 12,
                        "text": "positive"
                    }
                },
                {
                    "id": "817976a9e9233ceeed6083e38025eb29",
                    "title": "Bill Gross says Tesla is the new meme stock",
                    "description": "Longtime investor Bill Gross believes Elon Musk's Tesla is behaving like a speculative play among retail investors.",
                    "link": "https://www.cnbc.com/2024/07/10/bill-gross-says-tesla-is-the-new-meme-stock.html",
                    "image": "https://image.cnbcfm.com/api/v1/image/104445897-RTS150B4.jpg?v=1534773981&w=1920&h=1080",
                    "date": 1720618429,
                    "source": {
                        "id": "315247",
                        "name": "International: Top News And Analysis",
                        "url": "https://www.cnbc.com"
                    },
                    "sentiment": {
                        "score": -2,
                        "text": "negative"
                    }
                },
                {
                    "id": "95d5f2eeaa90314166ea6860f703e8d6",
                    "title": "Cleverly warns Tories against infighting and finger pointing as leadership race escalates  UK politics live",
                    "description": "Shadow home secretary James Cleverly has urged the party to avoid descending into ‘bitter’ internal disputesUkraine must decide for itself whether it uses Britain’s storm shadow missiles to strike military targets inside Russia, Keir Starmer has said.The prime minister said the long range missiles should be used for defensive purposes but that Kyiv would make its own decisions on targeting.We’re obviously providing military aid, that is obviously to be used in accordance with international human...",
                    "link": "https://www.theguardian.com/politics/live/2024/jul/10/conservative-leadership-james-cleverly-reform-uk-labour-keir-starmer",
                    "image": "https://i.guim.co.uk/img/media/ae36e9030948ccc8487614f82d88e6f68ef3cafa/1859_577_1626_976/master/1626.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=869376f2aa19ce2d9a014c9e89b1b1ed",
                    "date": 1720618312,
                    "source": {
                        "id": "315269",
                        "name": "The Guardian",
                        "url": "https://www.theguardian.com/world"
                    },
                    "sentiment": {
                        "score": 29,
                        "text": "positive"
                    }
                },
                {
                    "id": "17a5039bd5881a99745765da0c7a93c3",
                    "title": "Samsung Galaxy Watch 7 Price, news, specs, and features",
                    "description": "Samsung Galaxy Watches are consistently ranked as some of the best Android smartwatches. Here's everything on the 2024 model",
                    "link": "https://www.androidpolice.com/samsung-galaxy-watch-7/",
                    "image": "https://static1.anpoimages.com/wordpress/wp-content/uploads/wm/2024/07/samsung-galaxy-watch-7-06.jpg",
                    "date": 1720617132,
                    "source": {
                        "id": "314758",
                        "name": "Android Police – Android news, reviews, apps, games, phones, tablets",
                        "url": "https://www.androidpolice.com/"
                    },
                    "sentiment": {
                        "score": 9,
                        "text": "positive"
                    }
                },
                {
                    "id": "4f8c517c76f5e99ec860ab1fe51bb772",
                    "title": "Samsung Galaxy Z Fold 6 Price, specs, news, and features",
                    "description": "The Galaxy Z Fold 6 is finally here  this is what you need to know about it",
                    "link": "https://www.androidpolice.com/samsung-galaxy-z-fold-6/",
                    "image": "https://static1.anpoimages.com/wordpress/wp-content/uploads/wm/2024/07/samsung-galaxy-fold6-flip6-watchultra-watch7-buds3-handson-8-1.jpg",
                    "date": 1720616712,
                    "source": {
                        "id": "314758",
                        "name": "Android Police – Android news, reviews, apps, games, phones, tablets",
                        "url": "https://www.androidpolice.com/"
                    },
                    "sentiment": {
                        "score": 3,
                        "text": "positive"
                    }
                },
                {
                    "id": "79708e59f6cb3819960af70351540c05",
                    "title": "As NATO meets, leaders look to 'Trump-proof' the military alliance",
                    "description": "As NATO meets in Washington, the alliance is facing familiar foes and challenges. The prospect of another Donald Trump presidency is one of them.",
                    "link": "https://www.cnbc.com/2024/07/10/nato-leaders-look-to-trump-proof-the-military-alliance.html",
                    "image": "https://image.cnbcfm.com/api/v1/image/106275450-1575372103569gettyimages-1186241816.jpeg?v=1720609990&w=1920&h=1080",
                    "date": 1720616524,
                    "source": {
                        "id": "315247",
                        "name": "International: Top News And Analysis",
                        "url": "https://www.cnbc.com"
                    },
                    "sentiment": {
                        "score": 2,
                        "text": "positive"
                    }
                },
                {
                    "id": "a3ecbe1fa7d5c5fc5a3fed03750ea5df",
                    "title": "Biden Announces Tariffs on Chinese Metals Routed Through Mexico",
                    "description": "The measure aims to close a loophole that officials said allowed metals made partly in China to come into the United States duty free.",
                    "link": "https://www.nytimes.com/2024/07/10/us/politics/biden-steel-china-mexico.html",
                    "image": "https://static01.nyt.com/images/2024/07/10/business/10dc-biden-steel/10dc-biden-steel-facebookJumbo.jpg",
                    "date": 1720616425,
                    "source": {
                        "id": "315251",
                        "name": "NYT - World News",
                        "url": "https://nytimes.com"
                    },
                    "sentiment": {
                        "score": 4,
                        "text": "positive"
                    }
                },
                {
                    "id": "6871863ec9caa61e9cc86a1fb21d714c",
                    "title": "Samsung Galaxy Z Flip 6 Price, specs, news, and release date",
                    "description": "Everything you need to know about the Samsung Galaxy Z Flip 6.",
                    "link": "https://www.androidpolice.com/samsung-galaxy-z-flip-6/",
                    "image": "https://static1.anpoimages.com/wordpress/wp-content/uploads/wm/2024/07/samsung-galaxy-z-flip-6-blue-cover-screen.jpg",
                    "date": 1720616413,
                    "source": {
                        "id": "314758",
                        "name": "Android Police – Android news, reviews, apps, games, phones, tablets",
                        "url": "https://www.androidpolice.com/"
                    },
                    "sentiment": {
                        "score": 9,
                        "text": "positive"
                    }
                },
                {
                    "id": "3cf5a13bfe43751a19b2e2a836121c20",
                    "title": "Best fitness trackers for swimming in 2024",
                    "description": "Go for a dip or enjoy some deep-sea diving",
                    "link": "https://www.androidpolice.com/best-fitness-trackers-for-swimming/",
                    "image": "https://static1.anpoimages.com/wordpress/wp-content/uploads/2024/06/best-fitness-trackers-for-swimming.jpg",
                    "date": 1720616413,
                    "source": {
                        "id": "314758",
                        "name": "Android Police – Android news, reviews, apps, games, phones, tablets",
                        "url": "https://www.androidpolice.com/"
                    },
                    "sentiment": {
                        "score": 9,
                        "text": "positive"
                    }
                },
                {
                    "id": "3286debd22693ed43227e5e9f68a39cd",
                    "title": "Samsung Galaxy Ring Specs, features, pricing, and availability",
                    "description": "Everything you need to know about Samsung's first smart ring",
                    "link": "https://www.androidpolice.com/samsung-galaxy-ring/",
                    "image": "https://static1.anpoimages.com/wordpress/wp-content/uploads/wm/2024/07/samsung-galaxy-ring-in-case-open.jpg",
                    "date": 1720616413,
                    "source": {
                        "id": "314758",
                        "name": "Android Police – Android news, reviews, apps, games, phones, tablets",
                        "url": "https://www.androidpolice.com/"
                    },
                    "sentiment": {
                        "score": 5,
                        "text": "positive"
                    }
                },
                {
                    "id": "8ef23023f95173cdff9f76f4f531b9fe",
                    "title": "The Galaxy Watch 7 and Watch Ultra are the first smartwatches with Wear OS 5",
                    "description": "Yes, even ahead of the Google Pixel Watch",
                    "link": "https://www.androidpolice.com/galaxy-watch-7-ultra-wear-os-5/",
                    "image": "https://static1.anpoimages.com/wordpress/wp-content/uploads/wm/2024/07/samsung-galaxy-fold6-flip6-watchultra-watch7-buds3-handson-21-1.jpg",
                    "date": 1720616412,
                    "source": {
                        "id": "314758",
                        "name": "Android Police – Android news, reviews, apps, games, phones, tablets",
                        "url": "https://www.androidpolice.com/"
                    },
                    "sentiment": {
                        "score": 3,
                        "text": "positive"
                    }
                },
                {
                    "id": "6f2fa052f5bcc9f15c83c719e849fe1d",
                    "title": "Free Galaxy AI on the Z Fold 6 and Flip 6 expires at the same time as the Galaxy S24",
                    "description": "End of 2025",
                    "link": "https://www.androidpolice.com/free-galaxy-ai-z-fold-6-flip-6-expires-same-time-galaxy-s24/",
                    "image": "https://static1.anpoimages.com/wordpress/wp-content/uploads/wm/2024/07/samsung-galaxy-z-fold-6-ai-drawing-5.jpg",
                    "date": 1720616412,
                    "source": {
                        "id": "314758",
                        "name": "Android Police – Android news, reviews, apps, games, phones, tablets",
                        "url": "https://www.androidpolice.com/"
                    },
                    "sentiment": {
                        "score": 4,
                        "text": "positive"
                    }
                },
                {
                    "id": "e243b35d314a6b59e2d9d120271b9d11",
                    "title": "Samsung's Galaxy Z Fold 6 and Flip 6 are here with AI optimized for foldables",
                    "description": "The thinnest and lightest Galaxy Z lineup to date",
                    "link": "https://www.androidpolice.com/samsung-galaxy-z-flip-6-galaxy-z-fold-6-announcement/",
                    "image": "https://static1.anpoimages.com/wordpress/wp-content/uploads/wm/2024/07/samsung-galaxy-fold6-flip6-watchultra-watch7-buds3-handson-14-1.jpg",
                    "date": 1720616412,
                    "source": {
                        "id": "314758",
                        "name": "Android Police – Android news, reviews, apps, games, phones, tablets",
                        "url": "https://www.androidpolice.com/"
                    },
                    "sentiment": {
                        "score": 0,
                        "text": "neutral"
                    }
                },
                {
                    "id": "bf70febdd69b14b3949de36496b56cfe",
                    "title": "Samsung's latest Galaxy Watch wearables debut Wear OS 5",
                    "description": "The Samsung Galaxy Watch 7 and Galaxy Watch Ultra are different beasts",
                    "link": "https://www.androidpolice.com/samsung-galaxy-watch-7-samsung-galaxy-watch-ultra-announced/",
                    "image": "https://static1.anpoimages.com/wordpress/wp-content/uploads/wm/2024/07/samsung-galaxy-fold6-flip6-watchultra-watch7-buds3-handson-17-1.jpg",
                    "date": 1720616412,
                    "source": {
                        "id": "314758",
                        "name": "Android Police – Android news, reviews, apps, games, phones, tablets",
                        "url": "https://www.androidpolice.com/"
                    },
                    "sentiment": {
                        "score": 8,
                        "text": "positive"
                    }
                },
                {
                    "id": "f33615fd4638cf5058c96e89093565e1",
                    "title": "Samsung Galaxy Watch Ultra Specs, features, pricing, and availability",
                    "description": "Everything you need to know about Samsung's latest wearable",
                    "link": "https://www.androidpolice.com/samsung-galaxy-watch-ultra/",
                    "image": "https://static1.anpoimages.com/wordpress/wp-content/uploads/wm/2024/07/samsung-galaxy-watch-ultra-wrist-1.jpg",
                    "date": 1720616412,
                    "source": {
                        "id": "314758",
                        "name": "Android Police – Android news, reviews, apps, games, phones, tablets",
                        "url": "https://www.androidpolice.com/"
                    },
                    "sentiment": {
                        "score": 1,
                        "text": "positive"
                    }
                },
                {
                    "id": "da7cfa929ec8a35de61b5cd844a53588",
                    "title": "Samsung launches the Galaxy Ring  a first-of-its-kind product for the tech giant",
                    "description": "The Samsung Galaxy Ring has the ability to track various health metrics such as heart rate and sleep.",
                    "link": "https://www.cnbc.com/2024/07/10/samsung-galaxy-ring-launch-price-specs-feature-availability.html",
                    "image": "https://image.cnbcfm.com/api/v1/image/108002696-1720455696763-Samsung_Galaxy_Ring.jpg?v=1720455946&w=1920&h=1080",
                    "date": 1720616407,
                    "source": {
                        "id": "315247",
                        "name": "International: Top News And Analysis",
                        "url": "https://www.cnbc.com"
                    },
                    "sentiment": {
                        "score": 4,
                        "text": "positive"
                    }
                },
                {
                    "id": "41dd3642c2d84400e4454f1982c7c609",
                    "title": "Senate candidate Ruben Gallego could save Biden in Arizona, poll reveals",
                    "description": "Previously unreported poll shows Biden’s Latino support declining as Trump’s rises – but congressman’s popularity could offer a liftAfter a dismal debate performance that has thrown the viability of Joe Biden’s candidacy into question, Democrats worry he will drag other candidates on the ballot down with him. But in Arizona, there is hope that the strength of the US Senate candidate Ruben Gallego will have the opposite effect, boosting Biden.Equis Research, a Democratic group started by Obama ad...",
                    "link": "https://www.theguardian.com/us-news/article/2024/jul/10/arizona-joe-biden-ruben-gallego",
                    "image": "https://i.guim.co.uk/img/media/a4cca9ee588ec6d249e5d1ed559bb510d49d49a7/1_0_2998_1800/master/2998.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=8e601e10b0e130b02f783f4c231f6590",
                    "date": 1720616402,
                    "source": {
                        "id": "315269",
                        "name": "The Guardian",
                        "url": "https://www.theguardian.com/world"
                    },
                    "sentiment": {
                        "score": 16,
                        "text": "positive"
                    }
                },
                {
                    "id": "caec09662ed961c516fce842ff8977e8",
                    "title": "Joe Biden might have pulled off a great escape  but the curtains can come down anytime",
                    "description": "The president might have wiggled out of a dire circumstance after his debate after Democrats missed their chance, but uncertainty still lingersIn his dotage and with images of his epic Georgia debate meltdown still fresh in the popular mind, Joe Biden is probably nobody’s idea of a Harry Houdini copycat.Yet, with the Democratic party seemingly paralysed between the terror of a second Donald Trump presidency and fear of the consequences of taking decisive action, the US president may - barring mi...",
                    "link": "https://www.theguardian.com/us-news/article/2024/jul/10/joe-biden-democrats-nominee-uncertainty",
                    "image": "https://i.guim.co.uk/img/media/3caa4d37b9c137d687755bab94707b4f00a69b82/0_223_4000_2401/master/4000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=5b0bb4ae93e0778c53478048f6ce14b1",
                    "date": 1720616401,
                    "source": {
                        "id": "315269",
                        "name": "The Guardian",
                        "url": "https://www.theguardian.com/world"
                    },
                    "sentiment": {
                        "score": 0,
                        "text": "neutral"
                    }
                },
                {
                    "id": "117fdc330d00ccbabef17442e1d72785",
                    "title": "4 Google updates coming to Samsung devices",
                    "description": "New Circle to Search capabilities, Wear OS 5 and more are coming to Samsung’s latest devices.",
                    "link": "https://blog.google/products/android/google-updates-samsung-galaxy-unpacked-2024/",
                    "image": "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/22532-Hero_Image-2096x1182_1.width-1300.png",
                    "date": 1720616400,
                    "source": {
                        "id": "315397",
                        "name": "The Keyword",
                        "url": "https://blog.google"
                    },
                    "sentiment": {
                        "score": 2,
                        "text": "positive"
                    }
                },
                {
                    "id": "39fda9725dd26fa3f6719208e7ab172d",
                    "title": "Barratt to build fewer houses this year despite Labour pledge to fix shortage",
                    "description": "Housebuilder cites economic and political uncertainty as expected number of completed homes drops by up to 7%Business live – latest updatesBarratt Developments, Britain’s biggest housebuilder, expects to build fewer houses this year despite Labour’s pledge to build hundreds of thousands more.Its shares were the biggest faller on the FTSE 100 index on Wednesday, dropping by 2.9%, and later trading 2.2% lower. Continue reading...",
                    "link": "https://www.theguardian.com/business/article/2024/jul/10/barratt-to-build-fewer-houses-this-year-despite-labour-pledge-to-fix-shortage",
                    "image": "https://i.guim.co.uk/img/media/dcfd549923b8c605d1f42e740df9e0457a1cd3ea/538_5_1986_1192/master/1986.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=130a059335ad67d71cb41ca3eec07967",
                    "date": 1720616199,
                    "source": {
                        "id": "315269",
                        "name": "The Guardian",
                        "url": "https://www.theguardian.com/world"
                    },
                    "sentiment": {
                        "score": 0,
                        "text": "neutral"
                    }
                },
                {
                    "id": "4d65f40728c39eda4be8079a426547c5",
                    "title": "Fed Chair Powell says holding rates high for too long could jeopardize economic growth",
                    "description": "Setting the stage for a two-day appearance on Capitol Hill, the central bank leader said the economy remains strong as does the labor market.",
                    "link": "https://www.cnbc.com/2024/07/09/fed-chief-powell-says-holding-rates-high-for-too-long-could-jeopardize-economic-growth.html",
                    "image": "https://image.cnbcfm.com/api/v1/image/108003312-1720547068277-108003312-1720544901641-gettyimages-2160719223-powell_070924bc10.jpeg?v=1720547086&w=1920&h=1080",
                    "date": 1720615953,
                    "source": {
                        "id": "315247",
                        "name": "International: Top News And Analysis",
                        "url": "https://www.cnbc.com"
                    },
                    "sentiment": {
                        "score": 6,
                        "text": "positive"
                    }
                },
                {
                    "id": "5821666796ab391b7d9d9db8df74a0ce",
                    "title": "Just Stop Oil activist urges jurors to apply conscience in M25 protest trial",
                    "description": "Five climate protesters deny conspiracy to intentionally cause a public nuisance after motorway actionA climate activist accused of plotting to bring the M25 to a standstill urged jurors to apply their “conscience and common sense” to the case before they began their deliberations.Just Stop Oil protesters are said to have caused more than £500,000 worth of damage and delayed about 480,000 rush-hour journeys by scaling gantries over the motorway between 7 and 10 November 2022. Continue reading...",
                    "link": "https://www.theguardian.com/uk-news/article/2024/jul/10/just-stop-oil-activist-m25-protest-trial",
                    "image": "https://i.guim.co.uk/img/media/6ba52a79b4cb541a7fca5e9b92fe7d4a3aebd02d/0_201_3500_2100/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=a682a71cd6e06688ef36703574bc7e44",
                    "date": 1720615604,
                    "source": {
                        "id": "315269",
                        "name": "The Guardian",
                        "url": "https://www.theguardian.com/world"
                    },
                    "sentiment": {
                        "score": -31,
                        "text": "negative"
                    }
                },
                {
                    "id": "cac89c26c729341f3dd312c573330ebc",
                    "title": "Michael Bennet First Democratic senator questions Biden candidacy - BBC.com",
                    "description": "Michael Bennet: First Democratic senator questions Biden candidacy  BBC.comBiden buys time but Democratic senator warns he could lose in ‘landslide’  CNNHill Democrats remain divided on Biden, with one senator fearing Trump ‘landslide’  The Washington PostDem Senator Michael Bennet Predicts Trump Will Beat Biden ‘by a Landslide’  The Daily Beast‘We could lose the whole thing': Michael Bennet frets over Biden’s prospects  POLITICO",
                    "link": "https://www.bbc.com/news/articles/cgr5v941vmeo",
                    "image": "https://ichef.bbci.co.uk/news/1024/branded_news/0fcb/live/1fe3dff0-3e9d-11ef-8cda-f95c899bb5f8.jpg",
                    "date": 1720613999,
                    "source": {
                        "id": "315253",
                        "name": "Google News",
                        "url": "https://news.google.com/"
                    },
                    "sentiment": {
                        "score": -6,
                        "text": "negative"
                    }
                },
                {
                    "id": "56d594e23dbe6eadd943fcef22dac132",
                    "title": "YouTube Music is testing letting you build custom radio stations using AI prompts",
                    "description": "YouTube Music is apparently trying out a new way to pick your tunes just tell it what kind of music you want to hear.",
                    "link": "https://www.androidcentral.com/apps-software/youtube-music-is-testing-letting-you-build-custom-radio-stations-using-ai-prompts",
                    "image": "https://cdn.mos.cms.futurecdn.net/GzQNJ8Q6j77Rdsyt2oQSP8-1200-80.jpg",
                    "date": 1720613716,
                    "source": {
                        "id": "314752",
                        "name": "Android Central",
                        "url": "https://androidcentral.com"
                    },
                    "sentiment": {
                        "score": 6,
                        "text": "positive"
                    }
                },
                {
                    "id": "1022c6434598e1600c845a15c0295043",
                    "title": "First Democratic senator challenges Biden candidacy",
                    "description": "The president retains the support of key Democrats despite Michael Bennet suggesting he will lose the election.",
                    "link": "https://www.bbc.com/news/articles/cgr5v941vmeo",
                    "image": "https://ichef.bbci.co.uk/news/1024/branded_news/0fcb/live/1fe3dff0-3e9d-11ef-8cda-f95c899bb5f8.jpg",
                    "date": 1720613698,
                    "source": {
                        "id": "315243",
                        "name": "BBC News - World",
                        "url": "https://www.bbc.com/"
                    },
                    "sentiment": {
                        "score": 4,
                        "text": "positive"
                    }
                },
                {
                    "id": "ddb78a2f6cca557cd402330d43a57429",
                    "title": "Irish PM to help woman facing charges in Dubai",
                    "description": "An Irish woman who was prevented from leaving the United Arab Emirates has her travel ban lifted.",
                    "link": "https://www.bbc.com/news/articles/c897jlr9274o",
                    "image": "https://ichef.bbci.co.uk/news/1024/branded_news/d515/live/117b03e0-3e38-11ef-9e1c-3b4a473456a6.png",
                    "date": 1720613382,
                    "source": {
                        "id": "315243",
                        "name": "BBC News - World",
                        "url": "https://www.bbc.com/"
                    },
                    "sentiment": {
                        "score": -4,
                        "text": "negative"
                    }
                },
                {
                    "id": "b4558a2eb8a01ab5a23e580664623271",
                    "title": "2024 Hot Seat Rankings Sam Pittman, Billy Napier among nine college football coaches with jobs on the line - CBS Sports",
                    "description": "2024 Hot Seat Rankings: Sam Pittman, Billy Napier among nine college football coaches with jobs on the line  CBS Sports2024 College Football Hot Seat Rankings: Evaluating the job security of all 134 FBS coaches  CBS SportsKirby Smart Listed as \"Untouchable\" in Coaches Hot Seat Rankings  Sports IllustratedMajor College Football Head Coach Labeled 'Untouchable' In 2024 Hot Seat Rankings  Athlon Sports2024 Pressure Check Rankings: Dave Aranda, Deion Sanders headline Big 12 head coaches under the mo...",
                    "link": "https://www.cbssports.com/college-football/news/2024-hot-seat-rankings-sam-pittman-billy-napier-among-nine-college-football-coaches-with-jobs-on-the-line/",
                    "image": "https://sportsfly.cbsistatic.com/fly-0734/bundles/sportsmediacss/images/fantasy/default-article-image-large.png",
                    "date": 1720613160,
                    "source": {
                        "id": "315253",
                        "name": "Google News",
                        "url": "https://news.google.com/"
                    },
                    "sentiment": {
                        "score": 0,
                        "text": "neutral"
                    }
                },
                {
                    "id": "43b91d03aafe15a5edf2e4923d3742e7",
                    "title": "Science vs HIV",
                    "description": "The Human Immunodeficiency Virus (HIV) is a global pandemic, with 39 million cases worldwide, and over 1 million new infections each year. While it rose to epidemic and then pandemic levels in the 1980s, the first case goes back to 1959. HIV is a retrovirus that inserts its genetic material into the DNA of host cells, and targets the immune system as [...]\nThe post Science vs HIV first appeared on Science-Based Medicine.",
                    "link": "https://sciencebasedmedicine.org/science-vs-hiv/?utm_source=rss&",
                    "image": "https://sciencebasedmedicine.org/wp-content/uploads/2024/07/HIVAIDSandInfections_share.jpg",
                    "date": 1720612982,
                    "source": {
                        "id": "315317",
                        "name": "Science-Based Medicine",
                        "url": "https://sciencebasedmedicine.org"
                    },
                    "sentiment": {
                        "score": 0,
                        "text": "neutral"
                    }
                },
                {
                    "id": "c0bd9b48eee7291f02c2dd2f9a83d146",
                    "title": "Squirt Guns and Go Home Signs Barcelona Residents Take Aim at Tourists",
                    "description": "Locals confronted visitors to the Catalan capital in a whimsical but very serious demonstration against mass tourism and housing shortages.",
                    "link": "https://www.nytimes.com/2024/07/10/world/europe/barcelona-tourism-squirt-guns.html",
                    "image": "https://static01.nyt.com/images/2024/07/10/multimedia/10barcelona-tourism-01-cfpz/10barcelona-tourism-01-cfpz-facebookJumbo.jpg",
                    "date": 1720612821,
                    "source": {
                        "id": "315251",
                        "name": "NYT - World News",
                        "url": "https://nytimes.com"
                    },
                    "sentiment": {
                        "score": -4,
                        "text": "negative"
                    }
                },
                {
                    "id": "3adcd80702c355db3ae0120100b1e0b0",
                    "title": "Microsoft drops observer seat on OpenAI board amid regulator scrutiny",
                    "description": "Startup’s new approach means Apple will no longer be able to appoint executive to similar roleMicrosoft has withdrawn its observer seat on the OpenAI board and Apple will no longer be able to appoint an executive to a similar role, amid regulatory scrutiny of big tech’s relationship with artificial intelligence startups.Microsoft, the largest financial backer of the ChatGPT developer, announced the move in a letter to the startup, as first reported by the Financial Times. It said the resignation...",
                    "link": "https://www.theguardian.com/technology/article/2024/jul/10/microsoft-drops-observer-seat-on-openai-board-amid-regulator-scrutiny",
                    "image": "https://i.guim.co.uk/img/media/0d58d9d455dc6fe0f593ef43b9a37198afdbf36f/63_57_3399_2041/master/3399.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=bf4fbe8cb83a85c3ec024c4885f49907",
                    "date": 1720612196,
                    "source": {
                        "id": "315269",
                        "name": "The Guardian",
                        "url": "https://www.theguardian.com/world"
                    },
                    "sentiment": {
                        "score": -2,
                        "text": "negative"
                    }
                },
                {
                    "id": "68c5eee88b6f98fbf24d7b92a1aeb3c7",
                    "title": "Middle East Crisis At Least 25 Reported Killed in Israeli Strike at School-Turned-Shelter in Gaza - The New York Times",
                    "description": "Middle East Crisis At Least 25 Reported Killed in Israeli Strike at School-Turned-Shelter in Gaza  The New York TimesIsraeli attacks kill dozens as new peace talks appear to be faltering  CBS NewsIsrael orders all civilians to leave Gaza City as it strikes UNRWA building  Al Jazeera EnglishAirstrike kills 25 in southern Gaza as Israeli assault on Gaza City shuts down medical facilities  The Associated PressGaza airstrike hit as displaced gathered for soccer match, witnesses say  Reuters",
                    "link": "https://www.nytimes.com/live/2024/07/10/world/israel-gaza-war-hamas",
                    "image": "https://static01.nyt.com/images/2024/07/10/multimedia/10mideast-crisis-promo-825am-mqhj/10mideast-crisis-promo-825am-mqhj-facebookJumbo.jpg",
                    "date": 1720611999,
                    "source": {
                        "id": "315253",
                        "name": "Google News",
                        "url": "https://news.google.com/"
                    },
                    "sentiment": {
                        "score": -39,
                        "text": "negative"
                    }
                },
                {
                    "id": "4ccfc315628d239da0732f88eb7e52fc",
                    "title": "Syrian asylum seeker in UK says he lost everything after Rwanda roundup",
                    "description": "People held before planned removal from UK under Sunak government face disruption and relocation after releaseUK politics live – latest updatesA Syrian asylum seeker who was one of 220 people arrested and detained in preparation for forced removal to Rwanda says he has lost everything after his release.Critics described the high-profile mass roundups before the local elections in May as a “stunt” that needlessly disrupted the lives of many. Continue reading...",
                    "link": "https://www.theguardian.com/uk-news/article/2024/jul/10/syrian-asylum-seeker-rwanda-roundup-removal-sunak",
                    "image": "https://i.guim.co.uk/img/media/04fa28d7c3bfe3338f9eb78e61195383a8c87aec/0_117_3500_2100/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=fd8995326891f15b37370877543c74ec",
                    "date": 1720611580,
                    "source": {
                        "id": "315269",
                        "name": "The Guardian",
                        "url": "https://www.theguardian.com/world"
                    },
                    "sentiment": {
                        "score": -33,
                        "text": "negative"
                    }
                },
                {
                    "id": "abedc4657b8efcc2b56008305c302136",
                    "title": "Android 15 may soon be even more accessible for color blind users",
                    "description": "  submitted by    /u/FragmentedChicken   [link]   [comments]",
                    "link": "https://www.reddit.com/r/Android/comments/1dztib3/android_15_may_soon_be_even_more_accessible_for/",
                    "image": "https://external-preview.redd.it/OO7m40mSBZVYktYNot08ojRXbAOYsqeEftaJADlbU9U.jpg?width=640&crop=smart&auto=webp&s=1e57e42bd49e0da80ce01880671da1c2145cff11",
                    "date": 1720611239,
                    "source": {
                        "id": "314741",
                        "name": "Reddit Android",
                        "url": "https://www.reddit.com/r/android/"
                    },
                    "sentiment": {
                        "score": 0,
                        "text": "neutral"
                    }
                },
                {
                    "id": "864df51d6e5ee1d873f9277711c5bb27",
                    "title": "A phone meant not to be used what would it take to build one",
                    "description": "  submitted by    /u/RecklessGeek   [link]   [comments]",
                    "link": "https://www.reddit.com/r/Android/comments/1dzthqx/a_phone_meant_not_to_be_used_what_would_it_take/",
                    "image": "https://external-preview.redd.it/K-Uq5SvrCH1dJRMMi6WhoxlQf_87LhcwIwUdfKtibyc.jpg?width=320&crop=smart&auto=webp&s=3cb425aa90e3333df89303a088aac75eaa1b20ad",
                    "date": 1720611183,
                    "source": {
                        "id": "314741",
                        "name": "Reddit Android",
                        "url": "https://www.reddit.com/r/android/"
                    },
                    "sentiment": {
                        "score": 0,
                        "text": "neutral"
                    }
                },
                {
                    "id": "fb4c4ecd056d800fb62132e04b88131b",
                    "title": "14-foot crocodile killed a girl swimming in creek - WJW FOX 8 News Cleveland",
                    "description": "14-foot crocodile killed a girl swimming in creek  WJW FOX 8 News ClevelandHuman Remains Found amid Search for 12-Year-Old Girl Missing After Suspected Crocodile Attack  PEOPLEAustralia: Rangers shoot 14 foot crocodile that killed child  DW (English)Body found in search for child missing in croc attack  BBC.comRemains of missing 12-year-old girl in Australia found after apparent crocodile attack  CBS News",
                    "link": "https://fox8.com/news/international/ap-international/ap-rangers-shot-dead-a-14-foot-crocodile-after-it-killed-a-girl-swimming-in-an-australian-creek/",
                    "image": "https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw",
                    "date": 1720610551,
                    "source": {
                        "id": "315253",
                        "name": "Google News",
                        "url": "https://news.google.com/"
                    },
                    "sentiment": {
                        "score": -37,
                        "text": "negative"
                    }
                },
                {
                    "id": "403654bba373c7adab7b00e0b8ff3225",
                    "title": "Israeli military tells all Gaza City residents to evacuate",
                    "description": "Leaflets addressed to everyone in the city are dropped instructing them to head to central Gaza.",
                    "link": "https://www.bbc.com/news/articles/cy08nl4plvzo",
                    "image": "https://ichef.bbci.co.uk/news/1024/branded_news/108a/live/ae37d160-3eae-11ef-8778-2143088d857f.jpg",
                    "date": 1720610454,
                    "source": {
                        "id": "315243",
                        "name": "BBC News - World",
                        "url": "https://www.bbc.com/"
                    },
                    "sentiment": {
                        "score": -3,
                        "text": "negative"
                    }
                },
                {
                    "id": "bd61c6f1468590f762822f493ba9ad6c",
                    "title": "Manhunt launched in U.K. for crossbow-armed triple murder suspect - NBC News",
                    "description": "Manhunt launched in U.K. for crossbow-armed triple murder suspect  NBC NewsManhunt underway in London for suspected crossbow killer  CNNBushey manhunt: Triple murder victims ‘were family of BBC commentator’ – latest  The IndependentManhunt Launched After Murder of 3 Women, Police Say Suspect May Have Crossbow  PEOPLEUK Police Manhunt After Three Women Killed In 'Crossbow Attack'  Barron's",
                    "link": "https://www.nbcnews.com/news/world/manhunt-uk-crossbow-armed-triple-murder-suspect-rcna161074",
                    "image": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-07/240710-watford-crossbow-mb-1118-3a09d4.jpg",
                    "date": 1720610278,
                    "source": {
                        "id": "315253",
                        "name": "Google News",
                        "url": "https://news.google.com/"
                    },
                    "sentiment": {
                        "score": -28,
                        "text": "negative"
                    }
                },
                {
                    "id": "a68f523ca18e6bb6f946ce16f38478c8",
                    "title": "Explained How Accurate Are Gaza Death Figures, Does Hamas Control Them",
                    "description": "Palestinian health authorities say Israel's ground and air campaign in Gaza has killed more than 38,000 people, mostly civilians, and driven most of the enclave's 2.3 million people from their homes.",
                    "link": "https://www.ndtv.com/world-news/israel-hamas-gaza-palestine-explained-how-accurate-are-gaza-death-figures-does-hamas-control-them-6075524",
                    "image": "https://c.ndtvimg.com/2024-07/4e11d1u8_gaza-school-attack_625x300_09_July_24.jpeg?im=FaceCrop,algorithm=dnn,width=1200,height=738?ver-20240615.100",
                    "date": 1720610185,
                    "source": {
                        "id": "315249",
                        "name": "NDTV - World-news",
                        "url": "https://www.ndtv.com/"
                    },
                    "sentiment": {
                        "score": -111,
                        "text": "negative"
                    }
                }
            ],
            "count": 50
        }

        setNewsArticles(dummyData.results);

        setIsLoading(false);

        return dummyData;
    }

    useEffect(() => {
        fetchNewsArticles();
    }, []);

    if (isLoading) {
        return (
            <LoadingScreen />
        )
    }

    if (isError) {
        return (
            <div className='error'>
                <p>Error: {error}</p>
            </div>
        )
    }

    function handleClick() {
        setArticlesToConvert(selectedArticles);
        setStage(2);
    }

    return (
        <>
            <h2>Succes!</h2>
            <details>
                <summary>API Response:</summary>
                <textarea name="response" id="news-response" cols={80} rows={4} defaultValue={JSON.stringify(newsArticles, null, 2)}></textarea>
            </details>
            <NewsSelector articles={newsArticles} selectedArticles={selectedArticles} setSelectedArticles={setSelectedArticles} />
            <p>
                <button onClick={handleClick}>Convert to Questions</button>
            </p>
        </>
    )

}


export default FetchNewsArticles;