// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "semantic-ui"
document.addEventListener("DOMContentLoaded", function() {
    $('.ui.dropdown').dropdown();
    $('.ui.modal').modal();
  });
