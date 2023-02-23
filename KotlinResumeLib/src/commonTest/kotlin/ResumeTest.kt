
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json
import us.jsy.resume.resume
import kotlin.test.Test
import kotlin.test.assertEquals

class ResumeTest {
    @Test
    fun testSample() {
        assertEquals("Jin", resume.header.name.firstname )
    }
    @Test
    fun testJson() {
        val format = Json { prettyPrint = true }
        val s = format.encodeToString(resume)
        println(s)
        assertEquals("Jin_", s)
    }
}