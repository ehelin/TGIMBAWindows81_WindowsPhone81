function ClearAlert() {
    $("#MessageHolder").html('');
}
function Alert(msg) {
    ClearAlert();
    $("#MessageHolder").append('<p>' + msg + '</p>');
}
function GetRankingOptionsAsSelectHtml(curRankingValue) {
    var rankingOptions = GetRankingOptions();
    var headerPrefix = '<select id="rankingItemSelect" name="rankingItemSelect">';
    var headerSuffix = '</select>';
    var elementPrefix = '<option>';
    var elementSuffix = '</option>';
    var rankingOptionsHtml = null;

    rankingOptionsHtml = headerPrefix;

    for (i = 0; i < rankingOptions.length; i++) {
        if (rankingOptions[i] == curRankingValue)
            rankingOptionsHtml = rankingOptionsHtml + '<option selected>' + rankingOptions[i] + elementSuffix;
        else
            rankingOptionsHtml = rankingOptionsHtml + '<option>' + rankingOptions[i] + elementSuffix;
    }

    rankingOptionsHtml = rankingOptionsHtml + headerPrefix;

    return rankingOptionsHtml;
}
function IfNullGetEmptyString(value) {
    if (value == null)
        value = '';

    return value;
}
function RedirectToLogin(returnValue) {
    var redirect = false;

    if (returnValue == null)
        redirect = true;
    else if (!redirect && returnValue[0] == null)
        redirect = true;
    else if (!redirect && returnValue[0].indexOf(ERROR_000007) > 0)
        redirect = true;

    return redirect;
}
function GetItemAchievedAsCheckboxHtml(curSelection) {
    var cbHtmlPrefix = '<input type="checkbox" id="biAchievedcb" name="biAchievedcb"';
    var cbHtmlSuffix = '>';
    var cbAchievedHtml = null;

    cbAchievedHtml = cbHtmlPrefix;

    if (!IsNullEmpty(curSelection))
        if (curSelection == '1')
            cbAchievedHtml = cbAchievedHtml + ' checked';

    cbAchievedHtml = cbAchievedHtml + cbHtmlSuffix;

    return cbAchievedHtml;
}
function IsNullEmpty(value) {
    if (value != null && value.length > 0)
        return false;
    else
        return true;
}
function GetSortOptions() {
    $("#SortBucketListOptions").html('');

    var tblPrefix = '<table width="100%" class="SortDisplayTable"><tbody>';
    var tblRowPrefix = '<tr>';
    var tblRowSuffix = '</tr>';
    var tblCellPrefix = '<td>';
    var tblCellSuffix = '</td>';
    var tblButtonPrefix = '<input type=\"button\" class=\"BLButtonMenu\"';
    var tblButtonSuffix = '/>';
    var tblSuffix = '</tbody></table>';
    var sortingOptions = null;

    sortingOptions = tblPrefix;

    sortingOptions = sortingOptions + tblRowPrefix + tblCellPrefix + tblButtonPrefix
                            + "  id=\"SortBtnTitle\" name=\"SortBtnTitle\" value=\"Title\" " + tblButtonSuffix + tblCellSuffix + tblRowSuffix;
    sortingOptions = sortingOptions + tblRowPrefix + tblCellPrefix + tblButtonPrefix
                            + " id=\"SortBtnRanking\" name=\"SortBtnRanking\" value=\"Ranking\" " + tblButtonSuffix + tblCellSuffix + tblRowSuffix;
    sortingOptions = sortingOptions + tblRowPrefix + tblCellPrefix + tblButtonPrefix
                            + " id=\"SortBtnAchieved\" name=\"SortBtnAchieved\" value=\"Achieved\" " + tblButtonSuffix + tblCellSuffix + tblRowSuffix;
    sortingOptions = sortingOptions + tblRowPrefix + tblCellPrefix + tblButtonPrefix
                            + " id=\"SortBtnEntered\" name=\"SortBtnEntered\" value=\"Entered\" " + tblButtonSuffix + tblCellSuffix + tblRowSuffix;
    sortingOptions = sortingOptions + tblRowPrefix + tblCellPrefix
                                + '<input type="checkbox" id="biSortDesccb" name="biSortDesccb">Descending</input>' + tblCellSuffix + tblRowSuffix;

    sortingOptions = sortingOptions + tblRowPrefix + tblCellPrefix + '&nbsp;' + tblCellSuffix + tblRowSuffix;

    sortingOptions = sortingOptions + tblRowPrefix + tblCellPrefix + tblButtonPrefix
                        + " id=\"SortBtnClearSort\" name=\"SortBtnClearSort\" onclick=\"ProcessSort('" + SORTING_OPTIONS.CLEAR + "')\" value=\"Clear Sort\" " + tblButtonSuffix + tblCellSuffix + tblRowSuffix;
    sortingOptions = sortingOptions + tblRowPrefix + tblCellPrefix + tblButtonPrefix
                        + " id=\"SortBtnClearCancel\" name=\"SortBtnClearCancel\" value=\"Cancel\" " + tblButtonSuffix + tblCellSuffix + tblRowSuffix;

    sortingOptions = sortingOptions + tblSuffix;

    return sortingOptions;
}

function addSortEventHandlers() {
    document.getElementById("SortBtnTitle").onclick = function (evt) {
        ProcessSort(SORTING_OPTIONS.RANKING);
    }
    document.getElementById("SortBtnRanking").onclick = function (evt) {
        ProcessSort(SORTING_OPTIONS.ACHIEVED);
    }
    document.getElementById("SortBtnAchieved").onclick = function (evt) {
        ProcessSort(SORTING_OPTIONS.ENTERED);
    }
    document.getElementById("SortBtnEntered").onclick = function (evt) {
        ProcessSort(0);
    }

    document.getElementById("SortBtnClearSort").onclick = function (evt) {
        ProcessSort(SORTING_OPTIONS.CLEAR);
    }
    document.getElementById("SortBtnClearCancel").onclick = function (evt) {
        GlobalCancelEventClick();
    }
}
