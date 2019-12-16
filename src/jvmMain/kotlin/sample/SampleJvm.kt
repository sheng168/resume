package sample

//import kotlinx.css.*
//import kotlinx.css.properties.*

import io.ktor.application.call
import io.ktor.html.respondHtml
import io.ktor.http.ContentType
import io.ktor.http.content.resource
import io.ktor.http.content.static
import io.ktor.response.respondText
import io.ktor.routing.get
import io.ktor.routing.routing
import io.ktor.server.engine.embeddedServer
import io.ktor.server.netty.Netty
import kotlinx.html.*
import resume

actual class Sample {
    actual fun checkMe() = 42
}

actual object Platform {
    actual val name: String = "JVM"
}

fun main() {
    embeddedServer(Netty, port = 8080, host = "127.0.0.1") {
        routing {
            /**/
            get("/") {
                call.respondHtml {
                    head {
                        title("${resume.header.name.firstname} ${resume.header.name.middlenames} ${resume.header.name.surname} - Resume")
//                        style {
//                        }
                        styleLink("/styles.css")
                    }
                    body {
                        div("resume") {
                            //    <!-- contact info -->
                            div("header") {
                                h1("nameHeading") { +"${resume.header.name.firstname} ${resume.header.name.middlenames} ${resume.header.name.surname}" }
//<!--  -->
                                p("address") {
                                    +"${resume.header.address.street}"
                                    br()
                                    +"${resume.header.address.city}, ${resume.header.address.state} ${resume.header.address.zip}"
                                    p {
                                        +"Phone: ${resume.header.contact.phone}"
                                        br()

                                        +"Email: "
                                        a(href = "mailto:${resume.header.contact.email}") {
                                            +resume.header.contact.email
                                        }

                                        br()
                                    }
                                }

//    <!--objective-->
                                h2("heading") {
                                    span("headingText") {
                                        +"Professional Objective"
                                    }
                                }

                                resume.objective.forEach {
                                    p("para") {
                                        //  ng-repeat="obj in resume.objective">
                                        +"${it}"
                                    }
                                }


//    <!--skills-->
                                resume.skillarea.forEach { skillarea ->
                                    div {
                                        //  ng-repeat="skillarea in resume.skillarea">
                                        h2("heading") {
                                            span("headingText") {
                                                +"${skillarea.title}"
                                            }
                                        }
                                        skillarea.skillset.forEach { skillset ->
                                            p {
                                                //  ng-repeat="skillset in skillarea.skillset">
                                                span("skillSetTitle") {
                                                    +"${skillset.title}: "
                                                }
                                                span("skills") {
                                                    skillset.skill.forEach { skill -> //  ng-repeat="skill in skillset.skill">
                                                        +"${skill}, " // todo  {{(last)?'.':','}}"
                                                    }
                                                }

                                            }
                                        }

                                    }
                                }
                            }

//    <!--history-->
                            h2("heading") {
                                span("headingText") {
                                    +"Employment History"
                                }
                            }

                            resume.history.forEach { job ->

                                div {
                                    //  ng-repeat="job in resume.history">
                                    p("job") {
                                        span("jobTitle") {
                                            +"${job.jobtitle}: "
                                        }
                                        span("employer") {
                                            +"${job.employer} "
                                            span("location") {
                                                +"(${job.location.city}, ${job.location.state}) "
                                            }
                                            +"${job.period.from.month}/${job.period.from.year} to "
                                            if (job.period.to != null) {
                                                +"${job.period.to.month}/${job.period.to.year}"
                                            } else {
                                                +"Present"
                                            }
                                        }
                                        div("jobDescription") {
                                            job.description.forEach {
                                                p("para") {
                                                    //  ng-repeat="d in job.description">
                                                    +"${it}"
                                                }
                                            }
                                        }

                                        if (job.projects.isNotEmpty()) {
                                            div("projects") { //  ng-show="job.projects">
                                                p {
                                                    +"Projects: "
                                                }
                                                ul {
                                                    job.projects.forEach {
                                                        li("project") {
                                                            //  ng-repeat="project in job.projects">
                                                            span("projectTitle") {
                                                                +"${it.title}: "
                                                            }
                                                            +"${it.description}"
                                                        }
                                                    }
                                                }
                                            }
                                        }

                                        if (job.achievements.isNotEmpty()) {
                                            div("achievements") {
                                                //  ng-show="job.achievements">
                                                p {
                                                    +"Achievements: "
                                                }
                                                ul {
                                                    job.achievements.forEach {
                                                        li("achievement") {
                                                            //  ng-repeat="achievement in job.achievements">
                                                            +"${it}"
                                                        }
                                                    }


                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            //    <!-- honors -->
//    h2("heading") { span("headingText") { Honors and Recognition}}
//    ul {
//        li("award") { //  ng-repeat="award in resume.awards">
//            span("awardTitle") { ${award.title}},
//            span("organization") { ${award.organization}},
//            ${award.period.from.month}/${award.period.from.year} to ${award.period.to.month}/${award.period.to.year}
//        }
//    }

//    <!-- education -->
                            h2("heading") {
                                span("headingText") {
                                    +"Education"
                                }
                            }
                            ul("degrees") {
                                resume.academics?.degrees?.degree?.also { degree ->
                                    li("degree") {
                                        //  ng-repeat="degree in resume.academics.degrees">
                                        span("degreeTitle") {
                                            +"${degree.level} in ${degree.major}"
                                        }
                                        +", ${degree.date.month}/${degree.date.year}"
                                        br()
                                        span("institution") {
                                            +"${degree.institution}"
                                        }
                                        span("location") {
                                            +"(${degree.location.city}, ${degree.location.state})"
                                        }
                                        p {
                                            span("gpaPreamble") {
                                                +"Overall GPA: ${degree.gpa.score} out of ${degree.gpa.possible}."
                                                span("note") {
                                                    p("para") {
                                                        +"${degree.gpa.note.para}"
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }

//    <!-- misc -->
                                h2("heading") {
                                    span("headingText") {
                                        +"Miscellany"
                                    }
                                }
                                resume.misc.forEach {
                                    p("para") {
                                        //  ng-repeat="misc in resume.misc">
                                        +it
                                    }

                                }

                                p("lastModified") {
                                    +"Last modified ${resume.lastModified?.month}/${resume.lastModified?.year}."
                                }



//
//
//                                +"${hello()} from Ktor. Check me value: ${Sample().checkMe()}"
//                                div {
//                                    id = "js-response"
//                                    +"Loading..."
//                                }
//                                script(src = "/static/resumeJsJvm.js") {}
                            }
                        }
                    }
                }
            }

            get("/styles.css") {
                call.respondText("""
/*
 * compact.css -- Stylesheet suitable for printing an xmlresume to dead
 * trees without using too many of them (Arial font, white background)
 *
 * Contributed 2002 by Mark Miller (joup at bigfoot dot com)
 * http://xmlresume.sourceforge.net
 */

// This dummy style must be here because the xml tags above cause some 
// browsers (Konqueror, Mozilla) to ignore the first style 
.dummy { background-color: white }

body, table { 
    margin-top: 1cm; 
    margin-bottom: 1cm;
    font-size: 8pt;
    background-color: white;
    font-family: Arial, Verdana, sans-serif;
}

.resume { 
    padding-left: 1.5cm;
    padding-right: 1.5cm;
}
h2 {
    margin-left: -.8cm;
    font-family: sans-serif;
    color: black;
    border-bottom: solid 1pt black;
    font-size: 115%;
}
p {
    margin-bottom: 0.05cm;
    margin-top: 0.15cm;
}
em { font-weight: bold; }
ul { margin-top: 0.1cm; }

.projects p { font-style: italic }
ul.degrees { padding-left: 0.2cm; }
.subjectsHeading { font-style: italic }
.awardTitle { font-weight: bold }
.bookTitle { font-style: italic }
.citation { font-style: italic }
.copyright { font-size: 75% }
li.degree { margin-bottom: 0.2cm; }
.degreeTitle { font-weight: bold }
.employer { font-style: italic }
.headerBlock { text-align: left }
.jobTitle { font-weight: bold }
.lastModified { font-size: 75% }
.nameHeading { font-family: sans-serif; font-size: 125%; }
div.referee { margin-bottom: 0.5cm; }
table.referees { width: 60%; margin-top: 0cm; margin-bottom: 0cm;}
.refereeName { font-weight: bold }
.skillSetTitle { font-weight: bold }
.urlA { font-family:sans-serif; color:red; }

                """.trimIndent(),
                    contentType = ContentType.Text.CSS
                )
            }

            static("/static") {
                resource("resumeJsJvm.js")
            }
        }
    }.start(wait = true)
}