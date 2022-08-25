package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import modelo.Produto;

public class ProdutoDao {
	public List<Produto> buscarTudo() {
		List<Produto> ls = new ArrayList<Produto>();
		try {
			Connection conexao = Conexao.getConectar();
			PreparedStatement pst = conexao.prepareStatement("select * from produto");
			ResultSet rs  = pst.executeQuery();
			while (rs.next()) {
				Produto p = new Produto();
				p.setId(rs.getInt("id"));
				p.setNome(rs.getString("nome"));
				p.setPreco(rs.getFloat("preco"));
				ls.add(p);
				
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return ls;
	}
}