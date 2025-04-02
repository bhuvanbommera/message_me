// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
//= require jquery
//= require rails-ujs
//= require semantic-ui
//= require_tree .
import "@hotwired/turbo-rails"
import "controllers"
import "semantic-ui"
import Rails from "@rails/ujs";
Rails.start();
document.addEventListener("DOMContentLoaded", function() {
  $('.ui.dropdown').dropdown();
    $('.ui.modal').modal();
    $('.message .close').on('click', function() {
      $(this).closest('.message').transition('fade');
    });
  });

