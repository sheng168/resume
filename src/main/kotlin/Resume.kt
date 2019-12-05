
val name = Resume.Header.Name("Kotlin")


fun main(args: Array<String>) {
    println("Hello JavaScript! $name")
    println(resume)
}


data class Resume(
        val academics: Academics = Academics(),
        val awards: Awards = Awards(),
        val header: Header = Header(),
        val history: History = History(),
        val last: Int = 0, // 0
        val lastModified: LastModified = LastModified(),
        val misc: Array<String> = arrayOf(),
        val objective: Array<String> = arrayOf(),
        val skillarea: Array<Skillarea> = arrayOf()
) {
    
    data class Academics(
        val degrees: Degrees = Degrees()
    ) {
        
        data class Degrees(
            val degree: Degree = Degree()
        ) {
            
            data class Degree(
                val date: Date = Date(),
                val gpa: Gpa = Gpa(),
                val institution: String = "The Ohio State University", // The Ohio State University
                val level: String = "B.S.", // B.S.
                val location: Location = Location(),
                val major: String = "Computer Science and Engineering" // Computer Science and Engineering
            ) {
                
                data class Date(
                    val month: String = "12", // 12
                    val year: String = "2004" // 2004
                )

                
                data class Gpa(
                    val note: Note = Note(),
                    val possible: String = "4.00", // 4.00
                    val score: String = "3.38" // 3.38
                ) {
                    
                    data class Note(
                        val para: String = "Major GPA: 3.61 out of 4.00." // Major GPA: 3.61 out of 4.00.
                    )
                }

                
                data class Location(
                    val city: String = "Columbus", // Columbus
                    val state: String = "Ohio" // Ohio
                )
            }
        }
    }

    
    data class Awards(
        val award: Award = Award()
    ) {
        
        data class Award(
            val organization: String = "The Ohio State University", // The Ohio State University
            val period: Period = Period(),
            val title: String = "Dean's Array" // Dean's Array
        ) {
            
            data class Period(
                val from: From = From(),
                val to: To = To()
            ) {
                
                data class From(
                    val date: Date = Date()
                ) {
                    
                    data class Date(
                        val month: String = "1", // 1
                        val year: String = "2004" // 2004
                    )
                }

                
                data class To(
                    val date: Date = Date()
                ) {
                    
                    data class Date(
                        val month: String = "12", // 12
                        val year: String = "2004" // 2004
                    )
                }
            }
        }
    }

    
    data class Header(
        val address: Address = Address(),
        val contact: Contact = Contact(),
        val name: Name = Name()
    ) {
        
        data class Address(
            val city: String = "Rego Park", // Rego Park
            val state: String = "NY", // NY
            val street: String = "6434 102nd St, Apt 3K", // 6434 102nd St, Apt 3K
            val zip: String = "11374" // 11374
        )

        
        data class Contact(
            val email: String = "career18@jsy.us", // career18@jsy.us
            val phone: String = "347-688-JAVA(5282)" // 347-688-JAVA(5282)
        )

        
        data class Name(
            val firstname: String = "Jin", // Jin
            val middlenames: String = "S", // S
            val surname: String = "Yu" // Yu
        )
    }

    
    data class History(
        val a: A = A(),
        val b: B = B(),
        val c: C = C(),
        val d: D = D(),
        val e: E = E(),
        val t: T = T(),
        val x: X = X(),
        val y: Y = Y(),
        val z: Z = Z()
    ) {
        
        data class A(
            val achievements: Array<String> = arrayOf(),
            val description: Array<String> = arrayOf(),
            val employer: String = "RealNetworks", // RealNetworks
            val jobtitle: String = "Lead Development Engineer", // Lead Development Engineer
            val location: Location = Location(),
            val period: Period = Period(),
            val projects: Array<Project> = arrayOf()
        ) {
            
            data class Location(
                val city: String = "New York", // New York
                val state: String = "NY" // NY
            )

            
            data class Period(
                val from: From = From(),
                val to: To = To()
            ) {
                
                data class From(
                    val date: Date = Date()
                ) {
                    
                    data class Date(
                        val month: String = "4", // 4
                        val year: String = "2011" // 2011
                    )
                }

                
                data class To(
                    val date: Date = Date()
                ) {
                    
                    data class Date(
                        val month: String = "8", // 8
                        val year: String = "2014" // 2014
                    )
                }
            }

            
            data class Project(
                val description: String = "Develop server application using SMPP for inter-carrier messaging.", // Develop server application using SMPP for inter-carrier messaging.
                val title: String = "Server Application" // Server Application
            )
        }

        
        data class B(
            val achievements: Array<String> = arrayOf(),
            val description: Array<String> = arrayOf(),
            val employer: String = "Merrill Lynch", // Merrill Lynch
            val jobtitle: String = "Senior Software Developer", // Senior Software Developer
            val location: Location = Location(),
            val period: Period = Period(),
            val projects: Array<Project> = arrayOf()
        ) {
            
            data class Location(
                val city: String = "New York", // New York
                val state: String = "NY" // NY
            )

            
            data class Period(
                val from: From = From(),
                val to: To = To()
            ) {
                
                data class From(
                    val date: Date = Date()
                ) {
                    
                    data class Date(
                        val month: String = "11", // 11
                        val year: String = "2006" // 2006
                    )
                }

                
                data class To(
                    val date: Date = Date()
                ) {
                    
                    data class Date(
                        val month: String = "8", // 8
                        val year: String = "2010" // 2010
                    )
                }
            }

            
            data class Project(
                val description: String = "Take order execution updates from TIBCO Rendezvous and display them in a dynamic Java Swing interface.            Read updates from TCP connection and display them in a table component within a Java Applet.            Both applications use multiple threads to perform background operations to keep user interface responsive.          ", // Take order execution updates from TIBCO Rendezvous and display them in a dynamic Java Swing interface.            Read updates from TCP connection and display them in a table component within a Java Applet.            Both applications use multiple threads to perform background operations to keep user interface responsive.
                val title: String = "Desktop Applications" // Desktop Applications
            )
        }

        
        data class C(
            val employer: String = "Crispwireless", // Crispwireless
            val jobtitle: String = "Senior Systems Engineer", // Senior Systems Engineer
            val location: Location = Location(),
            val period: Period = Period()
        ) {
            
            data class Location(
                val city: String = "New York", // New York
                val state: String = "NY" // NY
            )

            
            data class Period(
                val from: From = From(),
                val to: To = To()
            ) {
                
                data class From(
                    val date: Date = Date()
                ) {
                    
                    data class Date(
                        val month: String = "3", // 3
                        val year: String = "2006" // 2006
                    )
                }

                
                data class To(
                    val date: Date = Date()
                ) {
                    
                    data class Date(
                        val month: String = "9", // 9
                        val year: String = "2006" // 2006
                    )
                }
            }
        }

        
        data class D(
            val employer: String = "SOFT Inc", // SOFT Inc
            val jobtitle: String = "Senior Systems Consultant", // Senior Systems Consultant
            val location: Location = Location(),
            val period: Period = Period()
        ) {
            
            data class Location(
                val city: String = "New York", // New York
                val state: String = "NY" // NY
            )

            
            data class Period(
                val from: From = From(),
                val to: To = To()
            ) {
                
                data class From(
                    val date: Date = Date()
                ) {
                    
                    data class Date(
                        val month: String = "9", // 9
                        val year: String = "2005" // 2005
                    )
                }

                
                data class To(
                    val date: Date = Date()
                ) {
                    
                    data class Date(
                        val month: String = "12", // 12
                        val year: String = "2005" // 2005
                    )
                }
            }
        }

        
        data class E(
            val employer: String = "SRA International", // SRA International
            val jobtitle: String = "Professional Staff Software Developer", // Professional Staff Software Developer
            val location: Location = Location(),
            val period: Period = Period()
        ) {
            
            data class Location(
                val city: String = "Fairfax", // Fairfax
                val state: String = "VA" // VA
            )

            
            data class Period(
                val from: From = From(),
                val to: To = To()
            ) {
                
                data class From(
                    val date: Date = Date()
                ) {
                    
                    data class Date(
                        val month: String = "1", // 1
                        val year: String = "2005" // 2005
                    )
                }

                
                data class To(
                    val date: Date = Date()
                ) {
                    
                    data class Date(
                        val month: String = "9", // 9
                        val year: String = "2005" // 2005
                    )
                }
            }
        }

        
        data class T(
                val description: Array<String> = arrayOf(),
                val employer: String = "Clearme.com", // Clearme.com
                val jobtitle: String = "Sr Software Engineer", // Sr Software Engineer
                val location: Location = Location(),
                val period: Period = Period(),
                val projects: Array<A.Project> = arrayOf()
        ) {
            
            data class Location(
                val city: String = "New York", // New York
                val state: String = "NY" // NY
            )

            
            data class Period(
                val from: From = From(),
                val to: To = To()
            ) {
                
                data class From(
                    val date: Date = Date()
                ) {
                    
                    data class Date(
                        val month: String = "7", // 7
                        val year: String = "2018" // 2018
                    )
                }

                
                data class To(
                    val date: Date = Date()
                ) {
                    
                    class Date(
                    )
                }
            }
        }

        
        data class X(
            val description: Array<String> = arrayOf(),
            val employer: String = "Catchpoint", // Catchpoint
            val jobtitle: String = "Sr Software Engineer", // Sr Software Engineer
            val location: Location = Location(),
            val period: Period = Period(),
            val projects: Array<Project> = arrayOf()
        ) {
            
            data class Location(
                val city: String = "New York", // New York
                val state: String = "NY" // NY
            )

            
            data class Period(
                val from: From = From(),
                val to: To = To()
            ) {
                
                data class From(
                    val date: Date = Date()
                ) {
                    
                    data class Date(
                        val month: String = "1", // 1
                        val year: String = "2016" // 2016
                    )
                }

                
                data class To(
                    val date: Date = Date()
                ) {
                    
                    data class Date(
                        val month: String = "4", // 4
                        val year: String = "2018" // 2018
                    )
                }
            }

            
            data class Project(
                val description: String = "Create the Java client library for our REST API. Ensure that authentication token renewal is implemented both correctly and efficiently.", // Create the Java client library for our REST API. Ensure that authentication token renewal is implemented both correctly and efficiently.
                val title: String = "Java Client for REST API" // Java Client for REST API
            )
        }

        
        data class Y(
            val description: Array<String> = arrayOf(),
            val employer: String = "RealNetworks", // RealNetworks
            val jobtitle: String = "Lead Mobile SDK Engineer", // Lead Mobile SDK Engineer
            val location: Location = Location(),
            val period: Period = Period(),
            val projects: Array<Project> = arrayOf()
        ) {
            
            data class Location(
                val city: String = "New York", // New York
                val state: String = "NY" // NY
            )

            
            data class Period(
                val from: From = From(),
                val to: To = To()
            ) {
                
                data class From(
                    val date: Date = Date()
                ) {
                    
                    data class Date(
                        val month: String = "4", // 4
                        val year: String = "2015" // 2015
                    )
                }

                
                data class To(
                    val date: Date = Date()
                ) {
                    
                    data class Date(
                        val month: String = "11", // 11
                        val year: String = "2015" // 2015
                    )
                }
            }

            
            data class Project(
                val description: String = "Polish private API for public consumption allowing third-party apps             to generate video stories by supplying their own content.", // Polish private API for public consumption allowing third-party apps             to generate video stories by supplying their own content.
                val title: String = "RealTimes SDK" // RealTimes SDK
            )
        }

        
        data class Z(
            val description: Array<String> = arrayOf(),
            val employer: String = "Algomi", // Algomi
            val jobtitle: String = "US Integration Lead Engineer", // US Integration Lead Engineer
            val location: Location = Location(),
            val period: Period = Period()
        ) {
            
            data class Location(
                val city: String = "New York", // New York
                val state: String = "NY" // NY
            )

            
            data class Period(
                val from: From = From(),
                val to: To = To()
            ) {
                
                data class From(
                    val date: Date = Date()
                ) {
                    
                    data class Date(
                        val month: String = "8", // 8
                        val year: String = "2014" // 2014
                    )
                }

                
                data class To(
                    val date: Date = Date()
                ) {
                    
                    data class Date(
                        val month: String = "4", // 4
                        val year: String = "2015" // 2015
                    )
                }
            }
        }
    }

    
    data class LastModified(
        val date: Date = Date()
    ) {
        
        data class Date(
            val month: String = "7", // 7
            val year: String = "2018" // 2018
        )
    }

    
    data class Skillarea(
            val skillset: Array<Skillset> = arrayOf(),
            val title: String = "Finance" // Finance
    ) {
        
        data class Skillset(
                val skill: Array<String> = arrayOf(),
                val title: String = "Finance" // Finance
        )
    }
}

data class Date(
        val month: String = "7", // 7
        val year: String = "2018" // 2018
)
