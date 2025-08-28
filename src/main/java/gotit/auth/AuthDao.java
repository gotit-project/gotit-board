package gotit.auth;

import gotit.model.user;

import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;
import java.sql.*;
import java.util.Optional;

public class AuthDao {
	private final DataSource ds;
	
	public static AuthDao fromJndi() {
		try {
			InitialContext ctx = new InitialContext();
			DataSource ds = (DataSource) ctx.lookup("java:comp/env/jdbc/gotDB");
			return new AuthDao(ds);
		} catch (NamingException e) {
			throw new RuntimeException("JNDI DataSource lookup 실패: java:comp/env/jdbc/gotDB", e);
			
		}
	}
	
	public static AuthDao fromServletContext(javax.servlet.ServletContext sc) {
		DataSource ds = (DataSource) sc.getAttribute("dataSource");
		if (ds = null) return fromJndi();
	}

}
