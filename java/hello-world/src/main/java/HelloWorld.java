public class HelloWorld {
	public static String hello(String name) {
		String whom = isBlank(name) ? "World" : name;
		return "Hello, " + whom + "!";
	}

	public static boolean isBlank(String string) {
		return (string == null || "".equals(string));
	}
}
