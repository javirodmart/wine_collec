class RegistrationsController < ApplicationController
    def create
        user = User.create!()
    end
end
