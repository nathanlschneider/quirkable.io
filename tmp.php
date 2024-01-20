<?

/**
 * @package     DOCman
 * @copyright   Copyright (C) 2011 Timble CVBA. (http://www.timble.net)
 * @license     GNU GPLv3 <http://www.gnu.org/licenses/gpl.html>
 * @link        http://www.joomlatools.com
 */
defined('KOOWA') or die;

//$cat_names = array('Tech Data', 'Installation Instructions', '3 Part Spec', 'Details', 'BIM', 'HPD', 'LEED', 'SDS', 'Submittal Form', 'Submittal', 'Sub Request');
$cat_names = array('Tech Data', '3 Part Spec', 'Details', 'BIM', 'HPD', 'LEED', 'SDS', 'Submittal', 'Sub Request');
$sub_detail_cat_names = [];
$doc_count = 0;
$cat_count = 0;
$new_docs = [];
$pdf = "";
$dwg = "";
$dxf = "";
?>

<?= helper('ui.load', array(
    'package' => 'docman',
    'wrapper' => false,
)); ?>


<? // No documents message if the "Show only user's documents" parameter is enabled 
?>
<? if (parameters()->total == 0) : if ($params->own) : ?>
        <p class="alert alert-info">
            <?= translate('You do not have any documents yet.'); ?>
        </p>
    <? endif;
else : ?>


    <?

    foreach ($documents as $document)
    {
        if (!in_array($document->category_title, $cat_names) && !in_array($document->category_title, $sub_detail_cat_names))
        {
            $sub_detail_cat_names[] = $document->category_title;
        }
    }

    foreach ($sub_detail_cat_names as $subcat)
    {
        $new_doc = new stdClass();

        foreach ($documents as $document)
        {
            if ($document->category_title == $subcat)
            {
                if ($document->mimetype == "application/pdf")
                {
                    $pdf = $document->title_link;
                }
                if ($document->mimetype == "image/vnd.dwg")
                {
                    $dwg = $document->title_link;
                }
                if ($document->mimetype == "image/vnd.dxf")
                {
                    $dxf = $document->title_link;
                }
            }
        }
        $subcat_line = "<div>$subcat - ";

        if ($pdf != "")
        {
            $subcat_line .= "<a href='$pdf'>PDF</a> ";
        }
        if ($dwg != "")
        {
            $subcat_line .= "<a href='$dwg'>DWG</a> ";
        }
        if ($dxf != "")
        {
            $subcat_line .= "<a href='$dxf'>DXF</a>";
        }

        $subcat_line .= "</div>";
        $new_doc->category_title = "Details";
        $new_doc->sub_category = true;
        $new_doc->title = $subcat_line;

        $new_docs[] = $new_doc;
    }

    foreach ($documents as $document)
    {
        $new_docs[] = $document;
    }
    ?>

    <? if ($params->track_downloads) : ?>
        <?= helper('com://admin/docman.behavior.download_tracker'); ?>
    <? endif; ?>

    <div class="k-ui-namespace">
        <div class="mod_docman mod_docman--documents">
            <div id="accord">
                <? foreach ($cat_names as $cat_name) : ?>
                    <? $cat_count++; ?>
                    <div class="segment-container">
                        <ul<?= $params->show_icon ? ' class="flex-ul hide mod_docman_icons"' : '' ?>>
                            <? foreach ($new_docs as $document) : ?>
                                <? if ($cat_name == trim($document->category_title)) : ?>
                                    <?php $doc_count++; ?>
                                    <?php if ($doc_count == 1)
                                    {
                                        $doc_link = $document->title_link;
                                    } ?>
                                    <?php if ($document->sub_category)
                                    { ?>
                                        <li class="module_document">
                                            <div class="koowa_header">
                                                <?= $document->title ?>
                                            </div>
                                        </li>
                                    <? }
                                    else
                                    { ?>
                                        <li class="module_document">
                                            <div class="koowa_header">
                                                <? // Header icon/image 
                                                ?>
                                                <? if ($document->icon && $params->show_icon) : ?>
                                                    <span class="koowa_header__item koowa_header__item--image_container">
                                                        <a href="<?= $document->title_link; ?>" class="koowa_header__image_link <?= $params->link_to_download ? 'docman_track_download' : ''; ?>" data-title="<?= escape($document->title); ?>" data-id="<?= $document->id; ?>" <?= $params->link_to_download ? 'type="' . $document->mimetype . '"' : ''; ?> <?= $params->download_in_blank_page ? 'target="_blank"' : ''; ?>>
                                                            <? // Icon 
                                                            ?>
                                                            <?= import('com://site/docman.document.icon.html', array('icon' => $document->icon, 'class' => 'k-icon--size-default')) ?>
                                                        </a>
                                                    </span>
                                                <? endif ?>

                                                <? // Header title 
                                                ?>
                                                <span class="koowa_header__item">
                                                    <span class="koowa_wrapped_content">
                                                        <span class="whitespace_preserver">
                                                            <a href="<?= $document->title_link; ?>" class="koowa_header__title_link <?= $params->link_to_download ? 'docman_track_download' : ''; ?>" data-title="<?= escape($document->title); ?>" data-id="<?= $document->id; ?>" <?= $params->link_to_download ? 'type="' . $document->mimetype . '"' : ''; ?> <?= $params->download_in_blank_page ? 'target="_blank"' : ''; ?>>
                                                                <?= escape($document->title); ?></a>
                                                        </span>
                                                    </span>
                                                </span>
                                            </div>


                                            <div class="module_document__info">
                                                <? // Category 
                                                ?>
                                                <? if ($document->category_link) : ?>
                                                    <div class="module_document__category">
                                                        <span class="koowa_wrapped_content">
                                                            <span class="whitespace_preserver">
                                                                <?= translate('In {category}', array('category' => '<a href="' . $document->category_link . '" target="_blank">' . escape($document->category_title) . '</a>')); ?>
                                                            </span>
                                                        </span>
                                                    </div>

                                                <? endif; ?>
                                            </div>
                                        </li>
                                    <? } ?>
                                <? endif; ?>
                            <? endforeach; ?>
                            </ul>
                            <div class="segment">
                                <?php
                                if ($doc_count != 0)
                                {
                                    if ($cat_name == "Details")
                                    {
                                        echo '<i class="icon-table-eye"></i>';
                                    }
                                    elseif ($cat_name == "Sample Request")
                                    {
                                        echo '<i class="icon-envelope"></i>';
                                    }
                                    else
                                    {
                                        if ($doc_count == 1)
                                        {
                                            echo '<a href="' . $doc_link . '"><i class="icon-table-download"></i></a>';
                                        }
                                        else
                                        {
                                            echo '<i class="icon-table-download"></i>';
                                        }
                                    }
                                }
                                ?>
                            </div>
                    </div>
                    <?php $doc_count = 0; ?>
                <? endforeach ?>
            </div>
        </div>
    </div>

<? endif; ?>
<script>
    window.onload = () => {

        let uls = document.querySelectorAll(".flex-ul");
        let is = document.querySelectorAll("i");

        uls.forEach(
            (ul) =>
            (ul.onclick = () => {
                ul.classList.add("hide");
            })
        );
        is.forEach(i => i.onclick = (e) => {
            uls.forEach((u) => u.classList.add("hide"));
            if (e.target.parentElement.previousElementSibling.children.length > 1) {
                e.target.parentElement.previousElementSibling.classList.toggle("hide");
            }
        })
    };
</script>