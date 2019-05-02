require "application_system_test_case"

class BidsTest < ApplicationSystemTestCase
  setup do
    @bid = bids(:one)
  end

  test "visiting the index" do
    visit bids_url
    assert_selector "h1", text: "Bids"
  end

  test "creating a Bid" do
    visit bids_url
    click_on "New Bid"

    fill_in "Auction", with: @bid.auction_id
    fill_in "Content", with: @bid.content
    fill_in "Status", with: @bid.status
    fill_in "User", with: @bid.user_id
    click_on "Create Bid"

    assert_text "Bid was successfully created"
    click_on "Back"
  end

  test "updating a Bid" do
    visit bids_url
    click_on "Edit", match: :first

    fill_in "Auction", with: @bid.auction_id
    fill_in "Content", with: @bid.content
    fill_in "Status", with: @bid.status
    fill_in "User", with: @bid.user_id
    click_on "Update Bid"

    assert_text "Bid was successfully updated"
    click_on "Back"
  end

  test "destroying a Bid" do
    visit bids_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Bid was successfully destroyed"
  end
end
