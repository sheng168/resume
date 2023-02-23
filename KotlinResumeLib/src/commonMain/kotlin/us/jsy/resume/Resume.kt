package us.jsy.resume

import kotlinx.serialization.Serializable

@Serializable
data class Resume(
        val header: Header,
        val objective: Array<String> = arrayOf(),
        val history: Array<History> = arrayOf(),
        val academics: Academics? = null,
        val awards: Awards? = null,
        val lastModified: Date? = null,
        val misc: Array<String> = arrayOf(),
        val skillarea: Array<Skillarea> = arrayOf()
) {
    @Serializable
    data class Academics(
            val degrees: Degrees
    ) {
        @Serializable
        data class Degrees(
                val degree: Degree
        ) {
            @Serializable
            data class Degree(
                    val date: Date,
                    val gpa: Gpa,
                    val institution: String, // The Ohio State University
                    val level: String, // B.S.
                    val location: Location,
                    val major: String // Computer Science and Engineering
            ) {
                @Serializable
                data class Gpa(
                        val note: Note,
                        val possible: String, // 4.00
                        val score: String // 3.38
                ) {
                    @Serializable
                    data class Note(
                            val para: String // Major GPA: 3.61 out of 4.00.
                    )
                }
            }
        }
    }

    @Serializable
    data class Awards(
            val award: Award
    ) {
        @Serializable
        data class Award(
                val organization: String = "The Ohio State University", // The Ohio State University
                val period: Period,
                val title: String = "Dean's Array" // Dean's Array
        )
    }

    @Serializable
    data class Header(
            val address: Address,
            val contact: Contact,
            val name: Name
    ) {
        @Serializable
        data class Address(
                val city: String, // Rego Park
                val state: String, // NY
                val street: String, // 6434 102nd St, Apt 3K
                val zip: String // 11374
        )

        @Serializable
        data class Contact(
                val email: String, // career18@jsy.us
                val phone: String // 347-688-JAVA(5282)
        )

        @Serializable
        data class Name(
            val firstname: String = "", // Jin
            val middlenames: String = "", // S
            val surname: String = "" // Yu
        )
    }

    @Serializable
    data class History(
            val jobtitle: String, // Sr Software Engineer
            val employer: String, // Clearme.com
            val location: Location,
            val period: Period,
            val description: Array<String> = arrayOf(),
            val achievements: Array<String> = arrayOf(),
            val projects: Array<Project> = arrayOf()
    ) {
        @Serializable
        data class Project(
                val description: String,
                val title: String
        )
    }

    @Serializable
    data class Skillarea(
            val title: String,
            val skillset: Array<Skillset> = arrayOf(),
    ) {
        @Serializable
        data class Skillset(
                val title: String,
                val skill: Array<String> = arrayOf(),
        )
    }
}

@Serializable
data class Location(
        val city: String, // New York
        val state: String // NY
)

@Serializable
data class Date(
        val month: Int, // 7
        val year: Int, // 2018
)

@Serializable
data class Period(
        val from: Date,
        val to: Date? = null
)