
data class Resume(
        val academics: Academics = Academics(),
        val awards: Awards = Awards(),
        val header: Header,
        val history: Array<History> = arrayOf(),
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
                data class Gpa(
                        val note: Note = Note(),
                        val possible: String = "4.00", // 4.00
                        val score: String = "3.38" // 3.38
                ) {
                    data class Note(
                            val para: String = "Major GPA: 3.61 out of 4.00." // Major GPA: 3.61 out of 4.00.
                    )
                }
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
        )
    }

    data class Header(
            val address: Address,
            val contact: Contact,
            val name: Name
    ) {
        data class Address(
                val city: String, // Rego Park
                val state: String, // NY
                val street: String, // 6434 102nd St, Apt 3K
                val zip: String // 11374
        )

        data class Contact(
                val email: String, // career18@jsy.us
                val phone: String // 347-688-JAVA(5282)
        )

        data class Name(
            val firstname: String = "", // Jin
            val middlenames: String = "", // S
            val surname: String = "" // Yu
        )
    }

    data class History(
            val achievements: Array<String> = arrayOf(),
            val description: Array<String> = arrayOf(),
            val employer: String, // Clearme.com
            val jobtitle: String, // Sr Software Engineer
            val location: Location = Location(),
            val period: Period = Period(),
            val projects: Array<Project> = arrayOf()
    ) {
        data class Project(
                val description: String,
                val title: String
        )
    }

    data class LastModified(
            val date: Date = Date()
    )

    data class Skillarea(
            val skillset: Array<Skillset> = arrayOf(),
            val title: String
    ) {
        data class Skillset(
                val skill: Array<String> = arrayOf(),
                val title: String
        )
    }
}

data class Location(
        val city: String = "New York", // New York
        val state: String = "NY" // NY
)

data class Date(
        val month: String = "", // 7
        val year: String = "" // 2018
)

data class Period(
        val from: From = From(),
        val to: To = To()
) {

    data class From(
            val date: Date = Date()
    )

    data class To(
            val date: Date = Date()
    )
}