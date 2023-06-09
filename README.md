<h1>Documentação de convenções e helps para desenvolvimento do projeto</h1><br>
<h2>TypeScript:</h2>
<p>o TypeScript é muito importante para garantir a segurança e consistência do sistema, assegurando a utilização de todos os parâmetros com seus respectivos tipos, além de proporcionar um ótimo recurso de autocompletagem de código.</p>
<div class="code-container">
    <pre>
      <code>
        
//exemplo de iniciação de componente com tipagem

//criação de tipo
type UserType = {
username: string;
password: string;
};

//criação da interface, funciona da mesma forma que o type, com uma obrigação maior
interface AppProps {
  prop1: number;
  prop2: string;
  prop3: boolean;
  prop4: UserType; //essa prop deve conter os conteúdos do tipo criado
}

//tipagem das props com a interface criada
export const App = (props: AppProps) => {
  return <></>;
};                
     </code>
    </pre>
  </div>
  
  <h3>Tenho que tipar tudo?</h3>
  <p>Não, o TypeScript faz automaticamente a inferência de tipos em muitos casos, ou seja, não é necessário definir o tipo explicitamente. Dessa forma, nós devemos apenas tipar conforme a necessidade do console, o próprio ambiente de desenvolvimento irá acusar quando houver necessidade de tipagem</p>
  <h3>O tipo do meu parâmetro não é primitivo, é um hook e agora?</h3>
  <p>É só passar o mouse em cima:</p>
  <img src="https://github.com/Rafael-Casaque/SoarStream/assets/72985101/d6b8203b-dcb0-45f1-8762-4b34378a5c8a">
  <p>Pronto, agora é apenas copiar o tipo, nesse caso é React.Dispatch</p>
  <h3>Não sei como tipar de jeito nenhum, o que eu faço?</h3>
  <p>Em último caso, podemos passar o tipo any, que aceita qualquer tipo de parâmetro (Cuidado com esse tipo, usar só em último caso, sempre opte por não usá-lo).</p>
