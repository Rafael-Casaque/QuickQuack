<h1>Documentação de convenções e helps para desenvolvimento do projeto</h1><br>
<h2>TypeScript:</h2>
<p>o TypeScript é muito importante para garantir a segurança e consistência do sistema, assegurando a utilização de todos os parâmetros com seus respectivos tipos, além de proporcionar um ótimo recurso de autocompletagem de código.</p>
<div>
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
  
  <h2>Chakra.UI:</h2>
  <p>O chakra é uma biblioteca de componentes prontos para uso em ambiente React, essa lib permite substituir o html + css clássico pelos componentes disponibilizados, declarando as propiedades css dentro como props, não necessitando da criação de documentos css.</p>
  <p>Exemplo de utilização dos componentes Flex e Text</p>
<img src="https://github.com/Rafael-Casaque/SoarStream/assets/72985101/a403f45b-cb7c-4883-aaa0-d299f4598e22">
<p>Note que as props passadas são exatamente iguais do css, a única diferença é que propriedades que utilizam hífem, devem adotar camel case, como justify-content = justifyContent</p>
<a href="https://chakra-ui.com/docs/components" target="_blank">Documentação oficial do Chakra.ui</a>
<p>A documentação do chakra é ótima, no lado esquerdo do site podemos ver todos os componentes disponíveis, exemplos de utilização e propriedades disponíveis.</p>
<h3>Responsividade:</h3>
<p>O Chakra também facilita muito a implementação da responsividade, através dos breakpoints padrões, que são esses:</p>
<img src="https://github.com/Rafael-Casaque/SoarStream/assets/72985101/3302c66b-4aca-4bfc-afc8-cab0bb1e2058">
<p>E como implementar no código? Através de uma simples list [ ], o Chakra já irá selecionar o índice da list conforme o breakpoint</p>
<p>Dessa maneira:</p>
<img src="https://github.com/Rafael-Casaque/SoarStream/assets/72985101/8d7852df-b441-45cf-8b3c-7047979aee65">
<p>Nesse exemplo a propriedade width do elemente muda conforme o tamanho da tela</p>
<p>Todas as propriedades css podem receber os responsive styles dessa maneira, passando uma list</p>
<a href="https://chakra-ui.com/docs/styled-system/responsive-styles">Documentação completa sobre responsive styles</a>
<hr>
<h2>Padrões Github:</h2>
<h3>commits</h3>
<p>Nesse projeto vamos utilizar o conventional commits para padronizar os commits feitos.</p>
<p>Fazemos da seguinte forma: <code>[tipo]: mensagem no passado com as atividades feitas</code>. Por exemplo: feat: created the userSettings page.</p>
<p>Dessa maneira podemos visualizar com mais praticidade o motivo dos commits e as atividades desenvolvidas</p>
<h3>branchs</h3>
<p>Esse projeto terá duas branchs principais, a main e a dev. A main será nossa branch final, com o projeto concreto e validado, por isso ela será protegida, é necessário que algum colaborador faça uma revisão de pull request para poder ralizar o merge. Então, iremos trabalhar e desenvolver o projeto direto na branch dev.</p>
<h3>Issues</h3>
<p>O que é isso?</p>
<p>As issues são as orientadoras das atividades a serem realizadas, elas podem ser acessadas a partir do repositorio do Git, dessa forma:</p>
<img src="https://github.com/Rafael-Casaque/SoarStream/assets/72985101/8c7ad3b6-b18c-42c1-baf5-a022959afe7c">
<p>Nessa página podemos ver todas as issues cadastradas, ao abrir uma devemos ter o cuidado de assinar, para que outro(a) desenvolvedor(a) não perca tempo trabalhando na mesma task</p>
<p>É possivel assinar uma determinada issue clicando no botão assign yourself:</p>
<img src="https://github.com/Rafael-Casaque/SoarStream/assets/72985101/8db90403-7c67-43da-a46a-52c2a346761c">
<h3>Assinei uma issue e agora?</h3>
<p>Bom, agora temos alguns passos importantes para garantir a integridade do projeto:</p>

<ol>
<li>Atualizar a branch dev, para entrar na dev usamos o comando <code>git checkout dev</code> e para atualizar <code>git pull</code></li>
<li>Criar uma nova branch a partir da dev atualizada, contendo o tipo de operação e poucas palavras definindo a atividade, exemplo de comando para criação: <code>git checkout -b feat/UserSettingsPage</code></li>
<li>Após realizar todas as atividades, é importante atualizar novamente essa nova branch com a dev, pois outro dev pode ter alterado algo importante. Com isso, devemos ir até a dev: <code>git checkout dev</code> atualizar: <code>git pull</code> retornar à branch criada: <code>git checkout feat/UserSettingsPage</code> realizar o merge da nova branch com a dev: <code>git merge dev</code></li>
<li>Pronto, agora já podemos fazer o commit e push da branch criada com o comando: <code>git push --set-upstream origin feat/UserSettingsPage</code></li>
<li>Agora, no GitHub Web criamos o pull request, solicitando o merge da branch criada com a dev, nesse processo é importante vincular o request com a issue atribuída, assim, quando o pr for aceito, a issue também é fechada</li>
</ol>
