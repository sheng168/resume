package sample

import io.ktor.application.*
import io.ktor.html.*
import io.ktor.http.content.*
import io.ktor.routing.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import kotlinx.html.*
//import kotlinx.css.*
//import kotlinx.css.properties.*

import resume
import java.io.*

actual class Sample {
    actual fun checkMe() = 42
}

actual object Platform {
    actual val name: String = "JVM"
}

fun main() {
    embeddedServer(Netty, port = 8080, host = "127.0.0.1") {
        routing {
            get("/") {
                call.respondHtml {
                    head {
                        title("Hello from Ktor!")
                        style {


                        }
                        styleLink("/styles.css")
                    }
                    body {
                        div("header") {
                            br()
                            div("header") {
                                h1("nameHeading") {
                                    +"${resume.header.name.firstname}"
                                }
                            }
                        }

                        div("resume") {

                            //    <!-- contact info -->
                            div("header") {
                                h1("nameHeading") { +"${resume.header.name.firstname} ${resume.header.name.middlenames} ${resume.header.name.surname}" }
//<!--  -->
                                p("address") {
                                    +"${resume.header.address.street}"
                                    br()
                                    +"${resume.header.address.city}, ${resume.header.address.state} ${resume.header.address.zip}}"
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
                                                    +"${skillset.title}:"
                                                }
                                                skillset.skill.forEach { skill ->
                                                    span("skills") {
                                                        span {
                                                            //  ng-repeat="skill in skillset.skill">
                                                            +"${skill}, " // todo  {{(last)?'.':','}}"
                                                        }
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

                                        job.projects.forEach {
                                            div("projects") {
                                                //  ng-show="job.projects">
                                                p {
                                                    +"Projects:"
                                                }
                                                ul {
                                                    li("project") {
                                                        //  ng-repeat="project in job.projects">
                                                        span("projectTitle") {
                                                            +"${it.title}:"
                                                        }
                                                        +"${it.description}"
                                                    }
                                                }
                                            }

                                        }

                                        div("achievements") {
                                            //  ng-show="job.achievements">
                                            p {
                                                +"Achievements:"
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





                                +"${hello()} from Ktor. Check me value: ${Sample().checkMe()}"
                                div {
                                    id = "js-response"
                                    +"Loading..."
                                }
                                script(src = "/static/resumeJsJvm.js") {}
                            }
                        }
                    }
                }
            }

            static("/static") {
                resource("resumeJsJvm.js")
            }
        }
    }.start(wait = true)
}