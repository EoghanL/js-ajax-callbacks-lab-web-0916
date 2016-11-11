const rootURL = "https://api.github.com/"
function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}
function searchRepositories(){
  let resp = ""
  let searchTerm = $("#searchTerms").val();
  $.ajax({
    url: rootURL + "search/repositories?q=" + searchTerm
  }).done(function(result){
    showRepositories(event, result)
  }).fail(function(){
    document.getElementById("errors").innerHTML = "YA DUN FAILED"
  })

}
function showRepositories(event, data){
  debugger
  const src = document.getElementById("repository-template").innerHTML
  const template = Handlebars.compile(src)
  const repoList = template(data.items)
  document.getElementById("results").innerHTML = repoList

}
function getCommits(el){
  let repo = el.dataset.repo
  let user = el.dataset.username
  debugger
  $.ajax({
    url: rootURL + 'repos/' + user + '/' + repo + '/commits'
  }).done(function(result){
    showCommits(event, result);
  }).fail(function(){
    document.getElementById("errors").innerHTML = "YOU DONE FAILED"
  })
}
function showCommits(event, data){
  debugger
  const src = document.getElementById("details-template").innerHTML;
  const template = Handlebars.compile(src)
  const commitList = template(data);
  document.getElementById("details").innerHTML = commitList
}

$(document).ready(function (){
  handlebarsSetup()

});
